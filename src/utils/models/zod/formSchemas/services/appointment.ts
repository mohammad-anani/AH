import { datetime, positiveNumber } from "../../reusableSchemas";
import { AppointmentSchema } from "../../schemas/services/appointment";

export const FormAppointmentSchema = AppointmentSchema.omit({
  Doctor: true,
  PreviousAppointmentID: true,
}).extend({
  ScheduledDate: datetime("Scheduled date").refine(
    (val) => new Date(val) > new Date(),
    {
      message: "Date must be in the future.",
    },
  ),
  DoctorID: positiveNumber("Doctor ID", 1),
  PreviousAppointmentID: positiveNumber(
    "Previous Appointment ID",
    1,
  ).nullable(),
});
