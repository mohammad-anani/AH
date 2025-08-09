import { z } from "zod";
import {
  positiveNumber,
  nonEmptyString,
  datetime,
  statusField,
} from "../reusableSchemas";

export const AppointmentSchema = z.object({
  ID: positiveNumber("Appointment ID", 1),
  DoctorID: positiveNumber("Doctor", 1, Number.MAX_SAFE_INTEGER, true),
  PatientID: positiveNumber("Patient", 1, Number.MAX_SAFE_INTEGER, true),
  ScheduledDate: datetime("Appointment date and time"),
  Reason: nonEmptyString("Reason").min(5, {
    message: "Please provide a reason with at least 5 characters.",
  }),
  Status: statusField("Status"),
  Notes: z.string(),
  BillID: positiveNumber("Payment", 1, Number.MAX_SAFE_INTEGER, true),
  CreatedByReceptionistID: positiveNumber("Receptionist ID"),
  CreatedAt: datetime("Creation date"),
});
