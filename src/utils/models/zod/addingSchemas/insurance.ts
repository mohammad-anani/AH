import { InsuranceSchema } from "../schemas/insurance";

export const AddInsuranceSchema = InsuranceSchema.omit({
  ID: true,
  isActive: true,
  CreatedAt: true,
  CreatedByReceptionistID: true,
});
