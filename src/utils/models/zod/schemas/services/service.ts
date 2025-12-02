import { z } from "zod";
import { datetime, nonEmptyString } from "../../reusableSchemas";
import { PatientRowSchema, ReceptionistRowSchema } from "../../rowSchemas";
import { BillSchema } from "../finance";

// Service Status Enum: 1 - In Progress; 2 - Requested; 3 - Scheduled; 4 - Cancelled; 5 - Completed; 6 - Rejected
export const serviceStatuses = [
  "In Progress",
  "Requested",
  "Scheduled",
  "Cancelled",
  "Completed",
  "Rejected",
] as const;

export const ServiceSchema = z.object({
  Patient: PatientRowSchema,

  ScheduledDate: datetime("Scheduled date"),

  ActualStartingDate: datetime("Actual starting date").nullable(),

  Reason: nonEmptyString("Reason", 10),

  Result: z.string().nullable(),

  ResultDate: datetime("Result date").nullable(),

  Status: z.enum(serviceStatuses, {
    message:
      "Status must be one of: In Progress, Requested, Scheduled, Cancelled, Completed, Rejected",
  }),

  Notes: z.string().nullable(),

  Bill: BillSchema,

  CreatedByReceptionist: ReceptionistRowSchema,

  CreatedAt: datetime("Created at"),
});
