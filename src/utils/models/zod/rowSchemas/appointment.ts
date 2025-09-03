import { z } from "zod";
import {
  booleanField,
  nonEmptyString,
  positiveNumber,
  datetime,
} from "../reusableSchemas";

export const AppointmentRowSchema = z.object({
  ID: positiveNumber("Appointment ID", 1),
  ScheduledDate: datetime("Scheduled date"),
  Status: nonEmptyString("Status"),
  PatientName: nonEmptyString("Patient name"),
  DoctorName: nonEmptyString("Doctor name"),
  IsPaid: booleanField("Is Paid"),
});
