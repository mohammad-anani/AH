import { z } from "zod";
import { datetimeWithinOneYear } from "../../reusableSchemas";

export const RescheduleServiceSchema = z.object({
  Notes: z.string().optional(),

  ScheduledDate: datetimeWithinOneYear("New scheduled date"),
});
