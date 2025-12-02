import { z } from "zod";
import {
  booleanField,
  datetime,
  nonEmptyString,
  positiveNumber,
} from "../../reusableSchemas";

export const TestAppointmentRowSchema = z.object({
  ID: positiveNumber("Test appointment ID", 1),
  PatientFullName: nonEmptyString("Patient full name", 3, 60),
  TestTypeName: nonEmptyString("Test name", 3, 50),
  IsOrdered: booleanField("Is ordered"),
  ScheduledDate: datetime("Scheduled date"),
  Status: nonEmptyString("Status", 3, 20),
  IsPaid: booleanField("Is paid"),
});
