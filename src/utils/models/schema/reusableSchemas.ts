import { z } from "zod";

export const numberCallBack = (val: string | number) =>
  typeof val === "number"
    ? val
    : typeof val === "string" && val.trim() !== ""
      ? Number(val)
      : undefined;

export const date = z.string().date();

export const nonEmptyString = z
  .string()
  .nonempty({ message: "This field cannot be empty." });

export const positiveNumber = (withZero: boolean = true) =>
  z.preprocess(
    (value) => {
      return !isNaN(Number(value)) && numberCallBack(value as string | number);
    },
    z
      .number()
      .nonnegative({ message: "Number must be zero or positive." })
      .min(withZero ? 0 : 1, { message: `Minimum is ${Number(!withZero)}` }),
  );

export const validDays = [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
] as const;

export const datetime = (withSeconds: boolean = true) =>
  z.string().datetime({
    local: true,
    precision: withSeconds ? 0 : -1,
    message: "Invalid datetime format.",
  });

export const time = (withSeconds: boolean = true) =>
  z.string().time({
    precision: withSeconds ? 0 : 0,
    message: "Invalid time format.",
  });
