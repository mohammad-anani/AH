import { datetime } from "../../reusableSchemas";
import { TestAppointmentSchema } from "../../schemas/test";

export const FormTestAppointmentSchema = TestAppointmentSchema.omit({
  ScheduledDate: true,
}).extend({
  ScheduledDate: datetime("Scheduled date").refine(
    (val) => new Date(val) > new Date(),
    {
      message: "Date must be in the future.",
    },
  ),
});
