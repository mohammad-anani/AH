import { z } from "zod";
import {
  booleanField,
  datetime,
  nonEmptyString,
  positiveNumber,
} from "../../reusableSchemas";

export const AppointmentRowSchema = z.object({
  ID: positiveNumber("Appointment ID", 1),
  PatientFullName: nonEmptyString("Patient full name", 3, 60),
  DoctorFullName: nonEmptyString("Doctor full name", 3, 60),
  ScheduledDate: datetime("Scheduled date"),
  Status: nonEmptyString("Status", 3, 20),
  IsPaid: booleanField("Is paid"),
});
