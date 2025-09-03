import { TestOrderSchema } from "../../schemas/services/test-order";
import { positiveNumber } from "../../reusableSchemas";

export const FormTestOrderSchema = TestOrderSchema.omit({
  Appointment: true,
  TestType: true,
}).extend({
  AppointmentID: positiveNumber("Appointment ID", 1),
  TestTypeID: positiveNumber("Test Type ID", 1),
});
