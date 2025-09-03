import { date, z } from "zod";
import {
  positiveNumber,
  nonEmptyString,
  booleanField,
  datetime,
} from "../../reusableSchemas";
import { PatientRowSchema, ReceptionistRowSchema } from "../../rowSchemas";

export const InsuranceSchema = z.object({
  ID: positiveNumber("Insurance ID", 1),

  Patient: PatientRowSchema,

  ProviderName: nonEmptyString("Provider name").min(10).max(50, {
    message: "Provider name must be between 10 and 50 characters.",
  }),

  Coverage: z.number().min(0.0).max(1.0, {
    message: "Coverage must be between 0 and 1.",
  }),

  ExpirationDate: date("Expiration date"),

  IsActive: booleanField("Active status"),

  CreatedAt: datetime("Created at"),

  CreatedByReceptionist: ReceptionistRowSchema,
});
