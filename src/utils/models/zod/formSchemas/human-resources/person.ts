import { z } from "zod";
import { date, nonEmptyString, phone, positiveNumber } from "../../reusableSchemas";

export const FormPersonSchema = z.object({
  FirstName: nonEmptyString("First Name", 3, 20),
  MiddleName: nonEmptyString("Middle Name", 3, 20),

  LastName: nonEmptyString("Last Name", 3, 20),

  Gender: z
    .string()
    .regex(/^[MF]$/, "Gender must be 'M' or 'F'")
    .nonempty("Gender is required"),

  BirthDate: date("Birth Date")
    .refine((date) => {
      const birthDate = new Date(date);
      const now = new Date();
      const age = now.getFullYear() - birthDate.getFullYear();
      return age <= 120 && birthDate <= now;
    }, "Birth date must be in the past and within 120 years"),

  CountryID: positiveNumber("Country", 1),

  Phone: phone,

});
