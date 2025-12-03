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

    if (config.url?.includes("auth/")) {
      return config;
    }

    const token = localStorage.getItem("token");
    const refreshToken = localStorage.getItem("refresh-token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers.set("token", token);
    }

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

    const newToken =
      response.headers["Token"] ||
      response.headers["authorization"] ||
      response.headers["Authorization"];


    const currentToken = localStorage.getItem("token");

    if (newToken) {
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
        return error.response;
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
