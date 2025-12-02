import { z } from "zod";

export const nonEmptyString = (name: string, minLength: number = 1, maxLength: number = Number.MAX_SAFE_INTEGER) =>
  z.string().nonempty({ error: `${name} is required.` }).min(minLength, { error: `${name} length must be at most ${minLength}.` }).max(maxLength,
    { error: `${name} length must be at most ${maxLength}.` }
  );

export const positiveNumber = (
  name: string,
  min: number = 1,
  max: number = Number.MAX_SAFE_INTEGER,
) =>
  z.number({
    error: `${name} is required.`,
  }).min(min, { message: `${name} must be at least ${min}.` })
    .max(max, { message: `${name} must be at most ${max}.` });

export const datetime = (name: string) =>
  z.string().datetime({
    local: true,
    error: `${name} must be a valid datetime.`,
  });

export const time = (name: string) =>
  z.string().time({
    error: `${name} must be a valid time.`,
  });

export const date = (name: string) =>
  z
    .string()
    .refine((val) => /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2})?$/.test(val), {
      message: `${name} must be a valid date.`,
    });

export const datetimeWithinOneYear = (name: string) =>
  datetime(name)
    .refine((val) => {
      const expDate = new Date(val);
      const now = new Date();
      const oneYearFromNow = new Date();
      oneYearFromNow.setFullYear(now.getFullYear() + 1);
      return expDate > now && expDate <= oneYearFromNow;
    }, `${name} must be in the future and within one year`);



export const datetimeInPast = (name: string) =>
  datetime(name)
    .refine((val) => {
      const expDate = new Date(val);
      const now = new Date();
      return expDate <= now;
    }, `${name} must not be in the future.`);

export const dateInPast = (name: string) =>
  date(name)
    .refine((val) => {
      const expDate = new Date(val);
      const now = new Date();
      return expDate <= now;
    }, `${name} must not be in the future.`);

export const dateWithinOneYear = (name: string) =>
  date(name)
    .refine((val) => {
      const expDate = new Date(val);
      const now = new Date();
      const oneYearFromNow = new Date();
      oneYearFromNow.setFullYear(now.getFullYear() + 1);
      return expDate > now && expDate <= oneYearFromNow;
    }, `${name} must be in the future and within one year`);

export const booleanField = (name: string) =>
  z.preprocess(
    (val: boolean | "true" | "false" | "") => {
      if (typeof val === "boolean") return val;
      if (typeof val === "string") return val === "" ? null : val === "true";
      return null;
    },
    z.boolean({ error: `${name} is required.` }),
  );

export const phone = z
  .string()
  .regex(/^[0-9]{8}$/, "Phone must be exactly 8 digits")
  .nonempty("Phone is required");
