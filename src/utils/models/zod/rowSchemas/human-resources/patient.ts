import { z } from "zod";
import { nonEmptyString, phone, positiveNumber } from "../../reusableSchemas";

export const PatientRowSchema = z.object({
  ID: positiveNumber("Patient ID", 1),
  FullName: nonEmptyString("Full name", 3, 60),
  Age: positiveNumber("Age", 0, 120),
  Phone: phone,
});
