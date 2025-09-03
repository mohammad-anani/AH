import { z } from "zod";
import {
  positiveNumber,
  nonEmptyString,
  booleanField,
} from "../../reusableSchemas";

export const PrescriptionRowSchema = z.object({
  ID: positiveNumber("Prescription ID", 1),
  AppointmentID: positiveNumber("Appointment ID", 1),
  Medication: nonEmptyString("Medication").min(5).max(256, {
    message: "Medication must be between 5 and 256 characters.",
  }),
  Dosage: nonEmptyString("Dosage").min(5).max(256, {
    message: "Dosage must be between 5 and 256 characters.",
  }),
  Frequency: nonEmptyString("Frequency").min(5).max(256, {
    message: "Frequency must be between 5 and 256 characters.",
  }),
  IsOnMedication: booleanField("Is on medication"),
});
