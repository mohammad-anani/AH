import { z } from "zod";
import {
  positiveNumber,
  nonEmptyString,
  datetime,
  statusField,
} from "../reusableSchemas";

export const AppointmentSchema = z.object({
  ID: positiveNumber("Appointment ID", 1),
  DoctorID: positiveNumber("Doctor ID", 1),
  PatientID: positiveNumber("Patient ID", 1),
  Time: datetime("Appointment date and time"),
  Reason: nonEmptyString("Reason").min(5, {
    message: "Please provide a reason with at least 5 characters.",
  }),
  Status: statusField("Status"),
  Notes: z.string(),
  BillID: positiveNumber("Payment ID", 1),
  CreatedByReceptionistID: positiveNumber("Receptionist ID", 1),
  CreatedAt: datetime("Creation date"),
});
