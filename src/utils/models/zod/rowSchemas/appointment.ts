import { AppointmentSchema } from "../schemas";
import { nonEmptyString } from "../reusableSchemas";
export const AppointmentRowSchema = AppointmentSchema.pick({
  ID: true,
  Time: true,
}).extend({
  PatientName: nonEmptyString("Patient name"),
  DoctorName: nonEmptyString("Doctor name"),
});
