import { z } from "zod";
import {
  positiveNumber,
  nonEmptyString,
  datetime,
} from "../../reusableSchemas";

export const FormPersonSchema = z.object({
  FirstName: nonEmptyString("First name").min(3).max(20, {
    message: "First name must be between 3 and 20 characters.",
  }),

  MiddleName: nonEmptyString("Middle name").min(3).max(20, {
    message: "Middle name must be between 3 and 20 characters.",
  }),

  LastName: nonEmptyString("Last name").min(3).max(20, {
    message: "Last name must be between 3 and 20 characters.",
  }),

  Gender: z.enum(["M", "F"], {
    message: "Gender must be 'M' or 'F'.",
  }),

  BirthDate: datetime("Birth date"),

  CountryID: positiveNumber("Country ID", 1),

  Phone: z.string().regex(/^[0-9]{8}$/, {
    message: "Phone must be exactly 8 digits.",
  }),

  Email: nonEmptyString("Email")
    .min(6)
    .max(40, {
      message: "Email must be between 6 and 40 characters.",
    })
    .email({
      message: "Invalid email format.",
    }),
});
