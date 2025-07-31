import { InsuranceSchema } from "../schemas";

export const InsuranceRowSchema = InsuranceSchema.pick({
  ID: true,
  ProviderName: true,
  Coverage: true,
  isActive: true,
  PatientID: true,
});
