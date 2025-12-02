import { z } from "zod";
import {
  booleanField,
  nonEmptyString,
  positiveNumber,
} from "../../reusableSchemas";

export const InsuranceRowSchema = z.object({
  ID: positiveNumber("Insurance ID", 1),
  ProviderName: nonEmptyString("Provider name", 10, 50),
  Coverage: positiveNumber("Coverage", 0.0, 1.0),
  IsActive: booleanField("Active status"),
});
