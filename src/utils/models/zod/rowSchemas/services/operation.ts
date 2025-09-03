import { z } from "zod";
import {
  booleanField,
  nonEmptyString,
  positiveNumber,
  datetime,
} from "../../reusableSchemas";

export const OperationRowSchema = z.object({
  ID: positiveNumber("Operation ID", 1),
  Name: nonEmptyString("Operation name").min(3).max(100, {
    message: "Operation name must be between 3 and 100 characters.",
  }),
  PatientFullName: nonEmptyString("Patient full name").min(3).max(60, {
    message: "Patient full name must be between 3 and 60 characters.",
  }),
  ScheduledDate: datetime("Scheduled date"),
  Status: nonEmptyString("Status").min(3).max(20, {
    message: "Status must be between 3 and 20 characters.",
  }),
  IsPaid: booleanField("Is paid"),
});
