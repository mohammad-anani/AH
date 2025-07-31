import { TestAppointmentSchema } from "../../schemas/test";

export const AddTestAppointmentSchema = TestAppointmentSchema.omit({
  ID: true,
  ResultDate: true,
  CreatedAt: true,
  CreatedByReceptionistID: true,
  Result: true,
  Status: true,
  PaymentID: true,
});
