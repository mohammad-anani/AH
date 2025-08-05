import { AppointmentSchema } from "../schemas";
import { booleanField, nonEmptyString } from "../reusableSchemas";
export const AppointmentRowSchema = AppointmentSchema.pick({
  ID: true,
  Time: true,
  Status: true,
}).extend({
  PatientName: nonEmptyString("Patient name"),
  DoctorName: nonEmptyString("Doctor name"),
  IsPaid: booleanField("Is Paid"),
});
