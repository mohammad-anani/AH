import { z } from "zod";
import { FormInsuranceSchema } from "../../formSchemas/finance/insurance.ts";

// CreateInsuranceDTO - extends InsuranceFormDTO with additional fields (CreatedByReceptionistID removed as BindNever)
export const AddInsuranceSchema = FormInsuranceSchema.extend({
  PatientID: z
    .number({ message: "Patient ID must be a positive number" })
    .min(1, "Patient ID must be a positive number")
    .refine((val) => val > 0, "Patient ID is required"),

  ExpirationDate: z
    .string()
    .date("Expiration date is required")
    .refine((val) => {
      const expDate = new Date(val);
      const now = new Date();
      const oneYearFromNow = new Date();
      oneYearFromNow.setFullYear(now.getFullYear() + 1);
      return expDate > now && expDate <= oneYearFromNow;
    }, "Expiration date must be in the future and within one year"),

});
