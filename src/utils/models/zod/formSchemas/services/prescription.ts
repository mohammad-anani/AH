import { z } from "zod";
import { nonEmptyString, datetime } from "../../reusableSchemas";

export const FormPrescriptionSchema = z
  .object({
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
  })
  .refine(
    (data) => {
      return new Date(data.MedicationEnd) > new Date(data.MedicationStart);
    },
    {
      message: "Medication end date must be after medication start date.",
      path: ["MedicationEnd"],
    },
  );
