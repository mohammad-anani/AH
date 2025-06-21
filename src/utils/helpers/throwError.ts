import { UNSAFE_ErrorResponseImpl } from "react-router-dom";

export default function throwError(
  statusCode: number,
  statusPhrase: string,
  message: string,
) {
  const error = new UNSAFE_ErrorResponseImpl(
    statusCode,
    statusPhrase,
    message,
    true,
  );
  throw error;
}
