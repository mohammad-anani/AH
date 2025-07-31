import { z } from "zod";
import { positiveNumber, datetime, nonEmptyString } from "../reusableSchemas";

// Appointment schema

export const AppointmentSchema = z.object({
  ID: positiveNumber(false).refine((v) => v > 0, {
    message: "Appointment ID is required.",
  }),
  DoctorID: positiveNumber(false).refine((v) => v > 0, {
    message: "Doctor ID is required.",
  }),
  PatientID: positiveNumber(false).refine((v) => v > 0, {
    message: "Patient ID is required.",
  }),
  Time: datetime().refine(Boolean, {
    message: "Appointment date and time is required.",
  }),
  Reason: nonEmptyString.min(5, {
    message: "Please provide a reason with at least 5 characters.",
  }),
  Status: nonEmptyString,
  Notes: z.string(),
  PaymentID: positiveNumber(false).refine((v) => v > 0, {
    message: "Payment ID is required.",
  }),
  CreatedByReceptionistID: positiveNumber(false).refine((v) => v > 0, {
    message: "Receptionist ID is required.",
  }),
  CreatedAt: datetime().refine(Boolean, {
    message: "Creation date is required.",
  }),
});
