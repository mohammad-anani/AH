import { z } from "zod";

export const CancelServiceSchema = z.object({
  Notes: z.string().optional(),
});
