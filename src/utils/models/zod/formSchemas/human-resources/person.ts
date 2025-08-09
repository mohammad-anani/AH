import z from "zod";
import { date } from "../../reusableSchemas";
import { PersonSchema } from "../../schemas/human-resources/person";

export const FormPersonSchema = PersonSchema.omit({
  DateOfBirth: true,
  Country: true,
}).extend({
  DateOfBirth: date("Date of birth")
    .refine((val) => new Date(val) <= new Date(), {
      message: "Date of birth cannot be in the future.",
    })
    .refine(
      (val) => {
        const min = new Date();
        min.setFullYear(min.getFullYear() - 120);
        return new Date(val) >= min;
      },
      {
        message: "Date of birth cannot be more than 120 years ago.",
      },
    ),
  Country: z.object({
    ID: z.number().refine((v) => v > 0, {
      message: "Country is required.",
    }),
    Name: z.string().optional(),
  }),
});
