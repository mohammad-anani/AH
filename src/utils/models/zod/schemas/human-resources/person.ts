import { z } from "zod";
import { dateInPast, nonEmptyString, phone } from "../../reusableSchemas";
import { CountrySchema } from "./CountrySchema";
import { userSchema } from "./user";

export const PersonSchema = z.object({
  FirstName: nonEmptyString("First name", 3),
  MiddleName: nonEmptyString("Middle name", 3),
  LastName: nonEmptyString("Last name", 3),
  Gender: z.enum(["M", "F"], { error: "Gender should be M or F" }),
  BirthDate: dateInPast("Birth Date"),
  Country: CountrySchema,
  Phone: phone,
  User: userSchema,
});
