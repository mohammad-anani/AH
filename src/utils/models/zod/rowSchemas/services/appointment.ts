import { z } from "zod";
import {
  booleanField,
  nonEmptyString,
  positiveNumber,
  datetime,
} from "../../reusableSchemas";

export const AppointmentRowSchema = z.object({
  ID: positiveNumber("Appointment ID", 1),
  PatientFullName: nonEmptyString("Patient full name").min(3).max(60, {
    message: "Patient full name must be between 3 and 60 characters.",
  }),
  DoctorFullName: nonEmptyString("Doctor full name").min(3).max(60, {
    message: "Doctor full name must be between 3 and 60 characters.",
  }),
  ScheduledDate: datetime("Scheduled date"),
  Status: nonEmptyString("Status").min(3).max(20, {
    message: "Status must be between 3 and 20 characters.",
  }),
  IsPaid: booleanField("Is paid"),
});
