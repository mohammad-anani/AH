import { z } from "zod";
import { positiveNumber, nonEmptyString, datetime } from "../reusableSchemas";

// Prescription schema

export const PrescriptionSchema = z.object({
  ID: positiveNumber(false).refine((v) => v > 0, {
    message: "Prescription ID is required.",
  }),
  AppointmentID: positiveNumber(false).refine((v) => v > 0, {
    message: "Appointment ID is required.",
  }),
  Diagnosis: nonEmptyString.min(5, {
    message: "Diagnosis must be at least 5 characters long.",
  }),
  Medication: nonEmptyString.min(2, {
    message: "Medication name must be at least 2 characters long.",
  }),
  Dosage: nonEmptyString,
  Frequency: nonEmptyString,
  MedicationStart: datetime().refine(Boolean, {
    message: "Medication start date is required.",
  }),
  MedicationEnd: datetime().refine(Boolean, {
    message: "Medication end date is required.",
  }),
  Notes: nonEmptyString.nullable(),
});
