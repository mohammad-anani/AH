import { z } from "zod";
import { positiveNumber, nonEmptyString } from "../../reusableSchemas";

export const PatientRowSchema = z.object({
  ID: positiveNumber("Patient ID", 1),
  FullName: nonEmptyString("Full name").min(3).max(60, {
    message: "Full name must be between 3 and 60 characters.",
  }),
  Age: z.number().min(0).max(120, {
    message: "Age must be between 0 and 120.",
  }),
  Phone: z.string().regex(/^[0-9]{8}$/, {
    message: "Phone must be exactly 8 digits.",
  }),
});
