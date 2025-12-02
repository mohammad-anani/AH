import throwError from "@/utils/helpers/throwError";
import a, { isAxiosError } from "axios";

const axios = a.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3001/",
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add JWT token and refresh token to headers
axios.interceptors.request.use(
  (config) => {
    // Skip adding tokens for auth endpoints
    if (config.url?.includes("auth/")) {
      return config;
    }

    // Get JWT token and refresh token from localStorage
    const token = localStorage.getItem("token");
    const refreshToken = localStorage.getItem("refresh-token");

    // Add Authorization header if token exists
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers.set("token", token);
    }

    // Add refresh token header if refresh token exists
    if (refreshToken) {
      config.headers["refresh-token"] = refreshToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  (response) => {
    console.log(123);
    console.log(response);
    // Check for new JWT token in response headers (refresh token logic)
    const newToken =
      response.headers["Token"] ||
      response.headers["authorization"] ||
      response.headers["Authorization"];

    // Get current tokens from localStorage
    const currentToken = localStorage.getItem("token");

    // If new JWT token is provided and different from current, update localStorage
    if (newToken) {
      // Remove 'Bearer ' prefix if present
      const cleanToken = newToken.startsWith("Bearer ")
        ? newToken.slice(7)
        : newToken;

      if (cleanToken !== currentToken) {
        localStorage.setItem("token", cleanToken);
      }
    }

    return response;
  },
  (error) => {
    if (isAxiosError(error)) {
      const status = error.response?.status ?? 0;
      const message =
        error.response?.data?.message ||
        error.message ||
        "An unknown error occurred";

      if (status === 404 && error.config?.url?.includes("auth/signin")) {
        console.log("heelo", error.response);
        return error.response; // return the response as-is
      }


      if (!error.response) {
        throwError(
          503,
          "Network error: Unable to reach the server. Please check your connection.",
        );
      }

      if (status === 500) {
        throwError(
          status,
          message || "Internal Server Error occurred on the server.",
        );
      }

      throwError(status, message);
    }

    throw error;
  },
);

export default axios;
