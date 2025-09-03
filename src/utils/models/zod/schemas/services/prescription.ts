import { z } from "zod";
import {
  positiveNumber,
  nonEmptyString,
  datetime,
} from "../../reusableSchemas";
import { AppointmentRowSchema } from "../../rowSchemas/appointment";

export const PrescriptionSchema = z.object({
  ID: positiveNumber("Prescription ID", 1),

  Appointment: AppointmentRowSchema,

  Diagnosis: nonEmptyString("Diagnosis").min(10).max(256, {
    message: "Diagnosis must be between 10 and 256 characters.",
  }),

  Medication: nonEmptyString("Medication").min(5).max(256, {
    message: "Medication must be between 5 and 256 characters.",
  }),

  Dosage: nonEmptyString("Dosage").min(5).max(256, {
    message: "Dosage must be between 5 and 256 characters.",
  }),

  Frequency: nonEmptyString("Frequency").min(5).max(256, {
    message: "Frequency must be between 5 and 256 characters.",
  }),

  MedicationStart: datetime("Medication start date"),

  MedicationEnd: datetime("Medication end date"),

  Notes: z.string(),
});
