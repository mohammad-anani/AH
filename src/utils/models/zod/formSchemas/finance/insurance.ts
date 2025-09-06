import { z } from "zod";
import { positiveNumber, nonEmptyString } from "../../reusableSchemas";

export const FormInsuranceSchema = z.object({
  ProviderName: nonEmptyString("Company name").min(3).max(30, {
    message: "Company name must be between 3 and 30 characters.",
  }),
  Coverage: positiveNumber("Coverage percentage", 1, 100),
});
