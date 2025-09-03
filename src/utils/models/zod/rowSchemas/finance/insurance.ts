import { z } from "zod";
import {
  positiveNumber,
  nonEmptyString,
  booleanField,
} from "../../reusableSchemas";

export const InsuranceRowSchema = z.object({
  ID: positiveNumber("Insurance ID", 1),
  ProviderName: nonEmptyString("Provider name").min(10).max(50, {
    message: "Provider name must be between 10 and 50 characters.",
  }),
  Coverage: z.number().min(0.0).max(1.0, {
    message: "Coverage must be between 0 and 1.",
  }),
  IsActive: booleanField("Active status"),
});
