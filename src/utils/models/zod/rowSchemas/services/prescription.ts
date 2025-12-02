import { z } from "zod";
import {
  booleanField,
  nonEmptyString,
  positiveNumber,
} from "../../reusableSchemas";

export const PrescriptionRowSchema = z.object({
  ID: positiveNumber("Prescription ID", 1),
  AppointmentID: positiveNumber("Appointment ID", 1),
  Medication: nonEmptyString("Medication", 5, 256),
  Dosage: nonEmptyString("Dosage", 5, 256),
  Frequency: nonEmptyString("Frequency", 5, 256),
  IsOnMedication: booleanField("Is on medication"),
});
