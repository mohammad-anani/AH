import { z } from "zod";
import { datetimeWithinOneYear } from "../../reusableSchemas";

export const AddTestAppointmentFromTestOrderSchema = z.object({
  ScheduledDate: datetimeWithinOneYear("Scheduled Date")

});
