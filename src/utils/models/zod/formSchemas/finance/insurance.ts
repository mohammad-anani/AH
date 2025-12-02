import { z } from "zod";
import { nonEmptyString, positiveNumber } from "../../reusableSchemas";

export const FormInsuranceSchema = z.object({
  ProviderName: nonEmptyString("Company name", 3, 30),
  Coverage: positiveNumber("Coverage percentage", 0.0, 1.0),
});
