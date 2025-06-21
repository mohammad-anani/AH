import throwError from "@/utils/helpers/throwError";
import a, { isAxiosError } from "axios";

const axios = a.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (isAxiosError(error)) {
      const status = error.response?.status ?? 0;
      const statusText = error.response?.statusText ?? "Network Error";
      const message =
        error.response?.data?.message ||
        error.message ||
        "An unknown error occurred";

      if (!error.response) {
        throwError(
          503,
          "Service Unavailable",
          "Network error: Unable to reach the server. Please check your connection.",
        );
      }

      if (status === 500) {
        throwError(
          status,
          statusText,
          message || "Internal Server Error occurred on the server.",
        );
      }

      throwError(status, statusText, message);
    }

    throw error;
  },
);

export default axios;
