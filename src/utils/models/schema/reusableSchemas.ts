import { z } from "zod";

// Converts a string or number input into a number (if valid)
export const numberCallBack = (val: string | number) => {
  return typeof val === "number"
    ? val
    : typeof val === "string" && val.trim() !== ""
      ? Number(val)
      : undefined;
};

// Validates that the string is a valid date
export const date = z.string().refine((val) => !isNaN(Date.parse(val)), {
  message: "Please enter a valid date.",
});

// Requires a non-empty string
export const nonEmptyString = z
  .string()
  .nonempty({ message: "This field is required." });

// Validates a number and optionally allows 0
export const positiveNumber = (withZero: boolean = true) =>
  z.preprocess(
    (value) => {
      if (!isNaN(Number(value))) return numberCallBack(Number(value));
    },
    z
      .number({
        required_error: "Please enter a number.",
        invalid_type_error: "Only numbers are allowed.",
      })
      .nonnegative({ message: "The number must be positive." })
      .min(withZero ? 0 : 1, {
        message: withZero
          ? "The minimum allowed value is 0."
          : "The minimum allowed value is 1.",
      }),
  );

export const floatNumber = (min: number, max: number) =>
  z.preprocess(
    (value) => {
      if (!isNaN(Number(value))) return numberCallBack(Number(value));
    },
    z
      .number({
        required_error: "Please enter a number.",
        invalid_type_error: "Only numbers are allowed.",
      })
      .nonnegative({ message: "The number must be positive." })
      .min(min, {
        message: "The minimum allowed value is " + min + " .",
      })
      .max(max, {
        message: "The maximum allowed value is " + max + " .",
      }),
  );

// Days of the week for dropdowns or validations
export const validDays = [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
] as const;

// Validates an ISO datetime string with a user-friendly error
export const datetime = (withSeconds: boolean = true) =>
  z.string().datetime({
    local: true,
    precision: withSeconds ? 0 : -1,
    message: "Please enter a valid date and time (e.g. 2024-01-01T14:30).",
  });

// Validates a time string (HH:mm or HH:mm:ss)
export const time = (withSeconds: boolean = true) =>
  z.string().time({
    precision: withSeconds ? 0 : 0,
    message: withSeconds
      ? "Please enter a valid time (e.g. 14:30:00)."
      : "Please enter a valid time (e.g. 14:30).",
  });
