import { z } from "zod";
import {
  positiveNumber,
  nonEmptyString,
  datetime,
} from "../../reusableSchemas";

export const FormPrescriptionSchema = z.object({
  DrugName: nonEmptyString("Drug name").min(3).max(30, {
    message: "Drug name must be between 3 and 30 characters.",
  }),

  Dosage: nonEmptyString("Dosage").min(3).max(50, {
    message: "Dosage must be between 3 and 50 characters.",
  }),

  Instructions: nonEmptyString("Instructions").min(3).max(100, {
    message: "Instructions must be between 3 and 100 characters.",
  }),

  IssueDate: datetime("Issue date"),

  DoctorID: positiveNumber("Doctor ID", 1),

  PatientID: positiveNumber("Patient ID", 1),
});
