import { z } from "zod";
import { AddPrescriptionSchema } from "../../addSchemas";
import { nonEmptyString, positiveNumber } from "../../reusableSchemas";

export const CompleteServiceSchema = z.object({
  Notes: z.string().optional(),

  Result: nonEmptyString("Result", 10, 256),
  TestTypeIDs: z.array(positiveNumber("Doctor id")).optional().nullable(),
  Prescriptions: z.array(AddPrescriptionSchema).optional().nullable()
});
