import { datetime } from "../reusableSchemas";
import { AppointmentSchema } from "../schemas/appointment";

export const FormAppointmentSchema = AppointmentSchema.omit({
  ScheduledDate: true,
}).extend({
  ScheduledDate: datetime("Scheduled date").refine(
    (val) => new Date(val) > new Date(),
    {
      message: "Date must be in the future.",
    },
  ),
});
