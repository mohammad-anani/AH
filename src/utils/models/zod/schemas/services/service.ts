import { z } from "zod";
import { nonEmptyString, datetime } from "../../reusableSchemas";
import { PatientRowSchema } from "../../rowSchemas/human-resources/patient";
import { ReceptionistRowSchema } from "../../rowSchemas/human-resources/receptionist";
import { BillRowSchema } from "../../rowSchemas/bill";

export const ServiceSchema = z.object({
  Patient: PatientRowSchema,

  ScheduledDate: datetime("Scheduled date"),

  ActualStartingDate: datetime("Actual starting date").nullable(),

  Reason: nonEmptyString("Reason").min(10, {
    message: "Reason must be at least 10 characters.",
  }),

  Result: z.string().nullable(),

  ResultDate: datetime("Result date").nullable(),

  Status: nonEmptyString("Status").min(3).max(20, {
    message: "Status must be between 3 and 20 characters.",
  }),

  Notes: z.string().nullable(),

  Bill: BillRowSchema,

  CreatedByReceptionist: ReceptionistRowSchema,

  CreatedAt: datetime("Created at"),
});
