import { z } from "zod";
import { positiveNumber, nonEmptyString, datetime } from "../reusableSchemas";

// Operation schema

export const OperationSchema = z.object({
  ID: positiveNumber(false).refine((v) => v > 0, {
    message: "Operation ID is required.",
  }),
  Name: nonEmptyString.min(2, {
    message: "Operation name must be at least 2 characters long.",
  }),
  Description: nonEmptyString.min(5, {
    message: "Description must be at least 5 characters long.",
  }),
  PatientID: positiveNumber(false).refine((v) => v > 0, {
    message: "Patient ID is required.",
  }),
  DepartmentID: positiveNumber(false).refine((v) => v > 0, {
    message: "Department ID is required.",
  }),
  ScheduledDate: datetime(true).refine(Boolean, {
    message: "Scheduled date and time is required.",
  }),
  Status: nonEmptyString,
  PaymentID: positiveNumber(false).refine((v) => v > 0, {
    message: "Payment ID is required.",
  }),
  CreatedByReceptionistID: positiveNumber(false).refine((v) => v > 0, {
    message: "Receptionist ID is required.",
  }),
  CreatedAt: datetime().refine(Boolean, {
    message: "Creation date is required.",
  }),
});
