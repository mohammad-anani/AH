import { z } from "zod";
import {
  datetime,
  nonEmptyString,
  positiveNumber,
} from "../../reusableSchemas";
import { AppointmentRowSchema } from "../../rowSchemas";

export const PrescriptionSchema = z.object({
  ID: positiveNumber("Prescription ID", 1),

  Appointment: AppointmentRowSchema,

  Diagnosis: nonEmptyString("Diagnosis", 10, 256),

  Medication: nonEmptyString("Medication", 5, 256),

  Dosage: nonEmptyString("Dosage", 5, 256),

  Frequency: nonEmptyString("Frequency", 5, 256),

  MedicationStart: datetime("Medication start date"),

  MedicationEnd: datetime("Medication end date"),

  Notes: z.string(),
});
