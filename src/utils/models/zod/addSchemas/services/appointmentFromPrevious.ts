import { z } from "zod";
import { datetimeWithinOneYear } from "../../reusableSchemas";

export const AddAppointmentFromPreviousSchema = z.object({
  ScheduledDate: datetimeWithinOneYear("Scheduled Date"),
  Notes: z.string().optional(),
});
