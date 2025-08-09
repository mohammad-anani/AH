import { TestOrderSchema } from "../../schemas/test";
import { positiveNumber } from "../../reusableSchemas";

export const FormTestOrderSchema = TestOrderSchema.omit({
  Appointment: true,
  TestType: true,
}).extend({
  AppointmentID: positiveNumber("Appointment ID", 1),
  TestTypeID: positiveNumber("Test Type ID", 1),
});
