import { z } from "zod";

// Required non-empty string
export const nonEmptyString = (name: string) =>
  z.string().nonempty({ error: `${name} is required.` });

export const positiveNumber = (
  name: string,
  min: number = 1,
  max: number = Number.MAX_SAFE_INTEGER,
  isSelector: boolean = false,
) => {
  // Converts string → number before validation
  const base = z.coerce.number({
    error: `${name} is required.`,
  });

  if (isSelector) {
    return base.refine((val) => val !== 0, {
      message: `${name} is required.`,
    });
  }

  return base
    .min(min, { message: `${name} must be at least ${min}.` })
    .max(max, { message: `${name} must be at most ${max}.` });
};

// Datetime with or without seconds
export const datetime = (name: string) =>
  z.string().datetime({
    local: true,
    error: `${name} must be a valid datetime.`,
  });

// Time with or without seconds
export const time = (name: string) =>
  z.string().time({
    error: `${name} must be a valid time.`,
  });

// Date (ISO)

export const date = (name: string) =>
  z
    .string()
    .refine((val) => /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2})?$/.test(val), {
      message: `${name} must be a valid date.`,
    });

// Boolean field
export const booleanField = (name: string) =>
  z.preprocess(
    (val: boolean | "true" | "false" | "") => {
      // removed console.log
      if (typeof val === "boolean") return val;
      if (typeof val === "string") return val === "" ? null : val === "true";
      return null;
    },
    z.boolean({ error: `${name} is required.` }),
  );

const statuses = ["Scheduled", "In Progress", "Completed", "Cancelled"];

export const statusField = (name: string) =>
  z.enum(statuses, {
    error: `${name} must be one of these : ${statuses.join(",")}`,
  });
