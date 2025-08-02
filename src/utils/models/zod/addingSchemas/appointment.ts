import { AppointmentSchema } from "../schemas/appointment";

export const AddAppointmentSchema = AppointmentSchema.omit({
  ID: true,
  CreatedAt: true,
  CreatedByReceptionistID: true,
  Status: true,
  BillID: true,
});
