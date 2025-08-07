import { get, useFormContext } from "react-hook-form";

interface ErrorObject {
  message?: string;
  type?: string;
  types?: Record<string, string | string[]>;
}

export default function useError(name: string): string[] | undefined {
  const {
    formState: { errors },
  } = useFormContext();

  const errorObj = get(errors, name) as ErrorObject | undefined;

  if (!errorObj) {
    return undefined;
  }

  const errorMessages: string[] = [];

  if (errorObj.types) {
    // Handle multiple validation errors
    Object.values(errorObj.types).forEach((typeError) => {
      if (Array.isArray(typeError)) {
        errorMessages.push(...typeError);
      } else if (typeof typeError === "string") {
        errorMessages.push(typeError);
      }
    });
  } else if (errorObj.message) {
    // Handle single error message
    errorMessages.push(errorObj.message);
  }

  return errorMessages.length > 0 ? errorMessages : undefined;
}
