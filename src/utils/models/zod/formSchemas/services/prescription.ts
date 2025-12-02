import { z } from "zod";
import { datetime, nonEmptyString } from "../../reusableSchemas";

export const FormPrescriptionSchema = z
  .object({
    Diagnosis: nonEmptyString("Diagnosis", 10, 256),

    Medication: nonEmptyString("Medication", 5, 256),

    Dosage: nonEmptyString("Dosage", 5, 256),

    Frequency: nonEmptyString("Frequency", 5, 256),

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
