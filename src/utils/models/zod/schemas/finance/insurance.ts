import { z } from "zod";
import {
  booleanField,
  date,
  datetime,
  nonEmptyString,
  positiveNumber,
} from "../../reusableSchemas";
import { PatientRowSchema, ReceptionistRowSchema } from "../../rowSchemas";

export const InsuranceSchema = z.object({
  ID: positiveNumber("Insurance ID", 1),

  Patient: PatientRowSchema,

  ProviderName: nonEmptyString("Provider name", 10, 50),

  Coverage: positiveNumber("Coverage", 0.0, 1.0),

  ExpirationDate: date("Expiration date"),

  IsActive: booleanField("Active status"),

  CreatedAt: datetime("Created at"),

  CreatedByReceptionist: ReceptionistRowSchema,
});
