import { FormAppointmentSchema } from "../formSchemas/appointment";

export const AddAppointmentSchema = FormAppointmentSchema.omit({
  ID: true,
  CreatedAt: true,
  CreatedByReceptionist: true,
  Status: true,
  Bill: true,
});
