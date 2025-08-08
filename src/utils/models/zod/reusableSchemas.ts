import { z } from "zod";

// Required non-empty string
export const nonEmptyString = (name: string) =>
  z.string().nonempty({ error: `${name} is required.` });

// Positive number with min/max
export const positiveNumber = (
  name: string,
  min: number = 1,
  max: number = Number.MAX_SAFE_INTEGER,
  isSelector: boolean = false,
) => {
  const base = z.number({ error: `${name} is required.` });
  if (isSelector) {
    return base.refine((val) => val !== 0, {
      message: `${name} is required.`,
    });
  }
  return base
    .min(min, { error: `${name} must be at least ${min}.` })
    .max(max, { error: `${name} must be at most ${max}.` });
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
  z.string().date({
    error: `${name} must be a valid date.`,
  });

// Boolean field
export const booleanField = (name: string) =>
  z.preprocess(
    (val: boolean | "true" | "false" | "") => {
      console.log(val);
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
