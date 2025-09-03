import { z } from "zod";

export const StartServiceSchema = z.object({
  Notes: z.string().optional(),
});
