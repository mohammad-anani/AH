import { FormTestAppointmentSchema } from "../../formSchemas/test/appointment";

export const AddTestAppointmentSchema = FormTestAppointmentSchema.omit({
  ID: true,
  ResultDate: true,
  CreatedAt: true,
  CreatedByReceptionist: true,
  Result: true,
  Status: true,
  Bill: true,
});
