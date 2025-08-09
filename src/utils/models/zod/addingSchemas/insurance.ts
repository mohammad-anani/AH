import { FormInsuranceSchema } from "../formSchemas/insurance";

export const AddInsuranceSchema = FormInsuranceSchema.omit({
  ID: true,
  isActive: true,
  CreatedAt: true,
  CreatedByReceptionist: true,
});
