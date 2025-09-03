import { datetime, positiveNumber } from "../../reusableSchemas";
import { TestAppointmentSchema } from "../../schemas/services/test-appointment";

export const FormTestAppointmentSchema = TestAppointmentSchema.omit({
  TestOrder: true,
  TestType: true,
}).extend({
  ScheduledDate: datetime("Scheduled date").refine(
    (val) => new Date(val) > new Date(),
    {
      message: "Date must be in the future.",
    },
  ),
  TestOrderID: positiveNumber("Test Order ID", 1),
  TestTypeID: positiveNumber("Test Type ID", 1),
});
