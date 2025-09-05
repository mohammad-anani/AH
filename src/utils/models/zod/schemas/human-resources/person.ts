import { z } from "zod";
import { nonEmptyString, date } from "../../reusableSchemas";
import { CountrySchema } from "./CountrySchema";
import { userSchema } from "./user";

export const PersonSchema = z.object({
  FirstName: nonEmptyString("First name").min(3, {
    message: "First name must be at least 3 characters long.",
  }),
  MiddleName: nonEmptyString("Middle name").min(3, {
    message: "Middle name must be at least 3 characters long.",
  }),
  LastName: nonEmptyString("Last name").min(3, {
    message: "Last name must be at least 3 characters long.",
  }),
  Gender: z.enum(["M", "F"], { error: "Gender should be M or F" }),
  BirthDate: date("Date of birth").refine(
    (val) => new Date(val) <= new Date(),
    {
      message: "Date of birth cannot be in the future.",
    },
  ),
  Country: CountrySchema,
  Phone: nonEmptyString("Phone").length(8, {
    message: "Phone number must be exactly 8 characters.",
  }),
  User: userSchema,
});
