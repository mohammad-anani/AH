import { z } from "zod";
import { positiveNumber, nonEmptyString, date } from "../../reusableSchemas";

export const FormInsuranceSchema = z.object({
  CompanyName: nonEmptyString("Company name").min(3).max(30, {
    message: "Company name must be between 3 and 30 characters.",
  }),

  PolicyNumber: nonEmptyString("Policy number").min(3).max(30, {
    message: "Policy number must be between 3 and 30 characters.",
  }),

  ExpiryDate: date("Expiry date"),

  CoveragePercentage: positiveNumber("Coverage percentage", 1, 100),

  PatientID: positiveNumber("Patient ID", 1),
});
