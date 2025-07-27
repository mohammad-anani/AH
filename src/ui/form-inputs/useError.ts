import { get, useFormContext } from "react-hook-form";

export default function useError(name: string) {
  const {
    formState: { errors },
  } = useFormContext();

  const errorObj = get(errors, name);

  const errorMessages: string[][] = [];

  if (errorObj) {
    if (errorObj.types) {
      errorMessages.push(...(Object.values(errorObj.types) as string[][]));
    } else if (errorObj.message) {
      errorMessages.push(errorObj.message);
    }

    return errorMessages;
  }
}
