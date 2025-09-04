import { z } from "zod";
import {
  positiveNumber,
  nonEmptyString,
  datetime,
  booleanField,
} from "../../reusableSchemas";

export const TestAppointmentRowSchema = z.object({
  ID: positiveNumber("Test appointment ID", 1),
  PatientFullName: nonEmptyString("Patient full name").min(3).max(60, {
    message: "Patient full name must be between 3 and 60 characters.",
  }),
  TestTypeName: nonEmptyString("Test name").min(3).max(50, {
    message: "Test name must be between 3 and 50 characters.",
  }),
  IsOrdered: booleanField("Is ordered"),
  ScheduledDate: datetime("Scheduled date"),
  Status: nonEmptyString("Status").min(3).max(20, {
    message: "Status must be between 3 and 20 characters.",
  }),
  IsPaid: booleanField("Is paid"),
});
