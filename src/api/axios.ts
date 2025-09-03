import throwError from "@/utils/helpers/throwError";
import a, { isAxiosError } from "axios";

const axios = a.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3001/",
  timeout: 10000,
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
  (response) => response,
  (error) => {
    if (isAxiosError(error)) {
      const status = error.response?.status ?? 0;

      const message =
        error.response?.data?.message ||
        error.message ||
        "An unknown error occurred";

      if (!error.response) {
        throwError(
          503,
          "Network error: Unable to reach the server. Please check your connection.",
        );
      }

      // Handle token expiration
      if (status === 401) {
        // Clear stored auth data
        localStorage.removeItem("token");
        localStorage.removeItem("refresh-token");

        // Redirect to login page
        window.location.href = "/login";
        return;
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
