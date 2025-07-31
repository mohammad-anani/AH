import { TestAppointmentSchema } from "../../schemas/test/appointment";
import { nonEmptyString, datetime } from "../../reusableSchemas";
export const TestAppointmentRowSchema = TestAppointmentSchema.pick({
  ID: true,
}).extend({
  PatientName: nonEmptyString("Patient name"),
  TestName: nonEmptyString("Test name"),
  Date: datetime("Date"),
});
