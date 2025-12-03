import { UNSAFE_ErrorResponseImpl } from "react-router-dom";

const statusPhrases: Record<number, string> = {
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",
  405: "Method Not Allowed",
  408: "Request Timeout",
  429: "Too Many Requests",
  500: "Internal Server Error",
  501: "Not Implemented",
  503: "Service Unavailable",
};

export default function throwError(
  statusCode: number,
  message: string = "An error has occurred.",
) {
  const statusPhrase = statusPhrases[statusCode] ?? "Unknown Error";

  const error = new UNSAFE_ErrorResponseImpl(
    statusCode,
    statusPhrase,
    message,
    true,
  );
  throw error;
}
