import { z } from "zod";
import { nonEmptyString, positiveNumber } from "../../reusableSchemas";

export const CompleteServiceSchema = z.object({
  Notes: z.string().optional(),

  Result: nonEmptyString("Result").min(3).max(256, {
    message: "Result must be between 3 and 256 characters.",
  }),
  TestTypeIDs: z.array(positiveNumber("doctor id")).optional().nullable(),
});
