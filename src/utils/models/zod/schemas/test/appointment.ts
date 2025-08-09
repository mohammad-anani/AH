import { z } from "zod";
import {
  positiveNumber,
  nonEmptyString,
  datetime,
  statusField,
} from "../../reusableSchemas";
import { TestTypeRowSchema } from "../../rowSchemas/test/type";
import { TestOrderRowSchema } from "../../rowSchemas/test/order";
import { PatientRowSchema } from "../../rowSchemas/human-resources/patient";
import { BillRowSchema } from "../../rowSchemas/bill";
import { ReceptionistRowSchema } from "../../rowSchemas/human-resources/receptionist";

export const TestAppointmentSchema = z.object({
  ID: positiveNumber("Test appointment", 1),
  TestOrder: TestOrderRowSchema.nullable(),
  Test: TestTypeRowSchema,
  Patient: PatientRowSchema,
  ScheduledDate: datetime("Scheduled date and time"),
  Status: statusField("Status"),
  Result: nonEmptyString("Result").nullable(),
  ResultDate: datetime("Result date").nullable(),
  Bill: BillRowSchema,
  CreatedByReceptionist: ReceptionistRowSchema,
  CreatedAt: datetime("Creation date"),
  Notes: z.string().optional(),
});
