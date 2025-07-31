import { z } from "zod";
import {
  positiveNumber,
  nonEmptyString,
  datetime,
} from "../../reusableSchemas";

export const TestAppointmentSchema = z.object({
  ID: positiveNumber("Test appointment ID", 1),
  TestOrderID: positiveNumber("Test Order ID").nullable(),
  TestID: positiveNumber("Test ID", 1),
  PatientID: positiveNumber("Patient ID", 1),
  ScheduledDate: datetime("Scheduled date and time"),
  Status: nonEmptyString("Status"),
  Result: nonEmptyString("Result").nullable(),
  ResultDate: datetime("Result date").nullable(),
  PaymentID: positiveNumber("Payment ID", 1),
  CreatedByReceptionistID: positiveNumber("Receptionist ID", 1),
  CreatedAt: datetime("Creation date"),
});
