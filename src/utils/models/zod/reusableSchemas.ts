import { z } from "zod";

export const nonEmptyString = (name: string) =>
  z.string().nonempty({ message: `${name} is required.` });

export const positiveNumber = (
  name: string,
  min: number = Number.MIN_SAFE_INTEGER,
  max: number = Number.MAX_SAFE_INTEGER,
) =>
  z
    .number({
      required_error: `${name} is required.`,
      invalid_type_error: `${name} must be a number.`,
    })
    .nonnegative({ message: `${name} must be positive.` })
    .min(min, { message: `${name} must be at least ${min}.` })
    .max(max, { message: `${name} must be at most ${max}.` });

export const datetime = (name: string, withSeconds: boolean = false) =>
  z.string().datetime({
    local: true,
    precision: withSeconds ? 0 : -1,
    message: `Please enter a valid ${name}.`,
  });

export const time = (name: string, withSeconds: boolean = true) =>
  z.string().time({
    precision: withSeconds ? 0 : 0,
    message: `Please enter a valid ${name}.`,
  });

export const date = (name: string) =>
  z.string().date(`Please enter a valid ${name}.`);

export const booleanField = (name: string) =>
  z.boolean({
    required_error: `${name} is required.`,
    invalid_type_error: `${name} must be true or false.`,
  });
