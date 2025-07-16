/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from "zod";

export const numberCallBack = (val: any) =>
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
    numberCallBack,
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

// export const boolean = (trueLabel: string, falseLabel: string) =>
//   z
//     .preprocess(
//       (val) => {
//         if (typeof val === "boolean")
//           return val ? trueLabel.toLowerCase() : falseLabel.toLowerCase();
//         if (typeof val === "string") return val.toLowerCase();
//         return val;
//       },
//       z.enum([trueLabel.toLowerCase(), falseLabel.toLowerCase()], {
//         message: `Value must be either "${trueLabel}" or "${falseLabel}".`,
//       }),
//     )
//     .transform((val) => val === trueLabel.toLowerCase());
