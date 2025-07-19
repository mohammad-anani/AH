import { UNSAFE_ErrorResponseImpl } from "react-router-dom";

export default function throwError(
  statusCode: number,
  statusPhrase: string,
  message: string = "An error has occured.",
) {
  const error = new UNSAFE_ErrorResponseImpl(
    statusCode,
    statusPhrase,
    message,
    true,
  );
  throw error;
}
