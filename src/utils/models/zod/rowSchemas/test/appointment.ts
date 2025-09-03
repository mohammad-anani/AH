import { TestAppointmentSchema } from "../../schemas/services/test-appointment";
import { nonEmptyString, datetime, booleanField } from "../../reusableSchemas";
export const TestAppointmentRowSchema = TestAppointmentSchema.pick({
  ID: true,
  Status: true,
}).extend({
  PatientName: nonEmptyString("Patient name"),
  TestName: nonEmptyString("Test name"),
  Date: datetime("Date"),
  IsPaid: booleanField("Is Paid"),
});
