import { z } from "zod";
import {
  positiveNumber,
  nonEmptyString,
  date,
  datetime,
  booleanField,
} from "../reusableSchemas";

export const InsuranceSchema = z.object({
  ID: positiveNumber("Insurance ID", 1),
  PatientID: positiveNumber("Patient ID", 1),
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
  CreatedByReceptionistID: positiveNumber("Receptionist ID", 1),
  CreatedAt: datetime("Creation date"),
});
