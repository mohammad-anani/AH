import { z } from "zod";
import {
  booleanField,
  datetime,
  nonEmptyString,
  positiveNumber,
} from "../../reusableSchemas";

export const OperationRowSchema = z.object({
  ID: positiveNumber("Operation ID", 1),
  Name: nonEmptyString("Operation name", 3, 100),
  PatientFullName: nonEmptyString("Patient full name", 3, 60),
  ScheduledDate: datetime("Scheduled date"),
  Status: nonEmptyString("Status", 3, 20),
  IsPaid: booleanField("Is paid"),
});
