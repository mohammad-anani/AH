import { z } from "zod";
import {
  positiveNumber,
  nonEmptyString,
  datetime,
  statusField,
} from "../../reusableSchemas";

export const TestAppointmentSchema = z.object({
  ID: positiveNumber("Test appointment", 1),
  TestOrderID: positiveNumber(
    "Test Order",
    1,
    Number.MAX_SAFE_INTEGER,
    true,
  ).nullable(),
  TestID: positiveNumber("Test", 1, Number.MAX_SAFE_INTEGER, true),
  PatientID: positiveNumber("Patient", 1, Number.MAX_SAFE_INTEGER, true),
  ScheduledDate: datetime("Scheduled date and time"),
  Status: statusField("Status"),
  Result: nonEmptyString("Result").nullable(),
  ResultDate: datetime("Result date").nullable(),
  BillID: positiveNumber("Payment", 1, Number.MAX_SAFE_INTEGER, true),
  CreatedByReceptionistID: positiveNumber("Receptionist ID"),
  CreatedAt: datetime("Creation date"),
  Notes: z.string().optional(),
});
