import { z } from "zod";
import {
  positiveNumber,
  nonEmptyString,
  floatNumber,
  date,
  datetime,
} from "../reusableSchemas";

// Insurance schema

export const InsuranceSchema = z.object({
  ID: positiveNumber(false).refine((v) => v > 0, {
    message: "Insurance ID is required.",
  }),
  PatientID: positiveNumber(false).refine((v) => v > 0, {
    message: "Patient ID is required.",
  }),
  ProviderName: nonEmptyString.min(2, {
    message: "Provider name must be at least 2 characters long.",
  }),
  Coverage: floatNumber(0.0, 1.0),
  ExpirationDate: date.refine((val) => new Date(val) > new Date(), {
    message: "Expiration date must be in the future.",
  }),
  isActive: z.boolean({
    required_error: "Active status must be set.",
  }),
  CreatedByReceptionistID: positiveNumber(false).refine((v) => v > 0, {
    message: "Receptionist ID is required.",
  }),
  CreatedAt: datetime().refine(Boolean, {
    message: "Creation date is required.",
  }),
});
