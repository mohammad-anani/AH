import { datetime, positiveNumber } from "../reusableSchemas";
import { AppointmentSchema } from "../schemas/appointment";

export const FormAppointmentSchema = AppointmentSchema.omit({
  ScheduledDate: true,
  Doctor: true,
  Patient: true,
  Bill: true,
  CreatedByReceptionist: true,
}).extend({
  ScheduledDate: datetime("Scheduled date").refine(
    (val) => new Date(val) > new Date(),
    {
      message: "Date must be in the future.",
    },
  ),
  DoctorID: positiveNumber("Doctor ID", 1),
  PatientID: positiveNumber("Patient ID", 1),
  BillID: positiveNumber("Bill ID", 1),
  CreatedByReceptionistID: positiveNumber("Created By Receptionist ID", 1),
});
