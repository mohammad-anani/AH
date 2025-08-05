import { z } from "zod";

// Required non-empty string
export const nonEmptyString = (name: string) =>
  z.string().nonempty({ error: `${name} is required.` });

// Positive number with min/max
export const positiveNumber = (
  name: string,
  min: number = 1,
  max: number = Number.MAX_SAFE_INTEGER,
) =>
  z
    .number({ error: `${name} is required and must be a number.` })
    .min(min, { error: `${name} must be at least ${min}.` })
    .max(max, { error: `${name} must be at most ${max}.` });

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
  z.boolean({ error: `${name} must be true or false.` });

const statuses = ["Scheduled", "In Progress", "Completed", "Cancelled"];

export const statusField = (name: string) =>
  z.enum(statuses, {
    error: `${name} must be one of these : ${statuses.join(",")}`,
  });
