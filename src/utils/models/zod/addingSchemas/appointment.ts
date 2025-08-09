import { FormAppointmentSchema } from "../formSchemas/appointment";

export const AddAppointmentSchema = FormAppointmentSchema.omit({
  ID: true,
  CreatedAt: true,
  CreatedByReceptionistID: true,
  Status: true,
  BillID: true,
});
