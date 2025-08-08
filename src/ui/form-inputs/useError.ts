import { get, useFormContext } from "react-hook-form";

interface ErrorObject {
  message?: string;
  type?: string;
  types?: Record<string, string | string[]>;
}

type ErrorResult = string[] | Record<string, string[]> | undefined;

export default function useError(name: string): ErrorResult {
  const {
    formState: { errors },
  } = useFormContext();

  const errorObj = get(errors, name);

  // If it's a simple error object (same as before)
  if (!errorObj || typeof errorObj !== "object" || "message" in errorObj) {
    return parseErrorObject(errorObj as ErrorObject | undefined);
  }

  // If it's an object or array (e.g., doctors[0], doctors[1]...)
  if (Array.isArray(errorObj)) {
    const parsed = errorObj
      .map(parseErrorObject)
      .filter((v): v is string[] => !!v);
    return parsed.length > 0 ? parsed.flat() : undefined;
  }

  const result: Record<string, string[]> = {};
  for (const key in errorObj) {
    const fieldError = errorObj[key] as ErrorObject;
    const parsed = parseErrorObject(fieldError);
    if (parsed && parsed.length > 0) {
      result[key] = parsed;
    }
  }

  return Object.keys(result).length > 0 ? result : undefined;
}

// 🔧 Reusable error parser (keeps your logic clean and backward compatible)
function parseErrorObject(
  errorObj: ErrorObject | undefined,
): string[] | undefined {
  if (!errorObj) return undefined;

  const messages: string[] = [];

  if (errorObj.types) {
    Object.values(errorObj.types).forEach((typeError) => {
      if (Array.isArray(typeError)) {
        messages.push(...typeError);
      } else if (typeof typeError === "string") {
        messages.push(typeError);
      }
    });
  } else if (errorObj.message) {
    messages.push(errorObj.message);
  }

  return messages.length > 0 ? messages : undefined;
}
