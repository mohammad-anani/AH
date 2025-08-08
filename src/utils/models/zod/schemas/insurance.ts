import { z } from "zod";
import {
  positiveNumber,
  nonEmptyString,
  date,
  datetime,
  booleanField,
} from "../reusableSchemas";

export const InsuranceSchema = z.object({
  ID: positiveNumber("Insurance", 1),
  Patient: positiveNumber("Patient", 1, Number.MAX_SAFE_INTEGER, true),
  ProviderName: nonEmptyString("Provider name").min(2, {
    message: "Provider name must be at least 2 characters long.",
  }),
  Coverage: positiveNumber("Coverage", 0, 1),
  ExpirationDate: date("Expiration date").refine(
    (val) => new Date(val) > new Date(),
    {
      message: "Expiration date must be in the future.",
    },
  ),
  isActive: booleanField("Active status"),
  CreatedByReceptionistID: positiveNumber("Receptionist ID"),
  CreatedAt: datetime("Creation date"),
});
