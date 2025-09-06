import { z } from "zod";
import { nonEmptyString } from "../../reusableSchemas";

export const FormServiceSchema = z.object({
  Reason: nonEmptyString("Reason").min(10, {
    message: "Reason must be at least 10 characters.",
  }),

  Notes: z.string().optional(),
});
