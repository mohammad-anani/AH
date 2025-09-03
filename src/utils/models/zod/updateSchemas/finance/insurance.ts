import { FormInsuranceSchema } from "../../formSchemas/finance/insurance";
import { positiveNumber } from "../../reusableSchemas";

export const UpdateInsuranceSchema = FormInsuranceSchema.extend({
  ID: positiveNumber("Insurance ID", 1),
});
