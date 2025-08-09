import { FormTestAppointmentSchema } from "../../formSchemas/test/appointment";

export const AddTestAppointmentSchema = FormTestAppointmentSchema.omit({
  ID: true,
  ResultDate: true,
  CreatedAt: true,
  CreatedByReceptionistID: true,
  Result: true,
  Status: true,
  BillID: true,
});
