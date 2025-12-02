import { z } from "zod";
import { nonEmptyString } from "../../reusableSchemas";

export const FormServiceSchema = z.object({
  Reason: nonEmptyString("Reason", 10),

  Notes: z.string().optional(),
});
