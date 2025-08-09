import { z } from "zod";
import {
  positiveNumber,
  nonEmptyString,
  datetime,
  statusField,
} from "../reusableSchemas";
import { PatientRowSchema } from "../rowSchemas/human-resources/patient";
import { DepartmentRowSchema } from "../rowSchemas/department";
import { BillRowSchema } from "../rowSchemas/bill";
import { ReceptionistRowSchema } from "../rowSchemas/human-resources/receptionist";

export const OperationSchema = z
  .object({
    ID: positiveNumber("Operation", 1),
    Name: nonEmptyString("Operation name").min(2, {
      message: "Operation name must be at least 2 characters long.",
    }),
    Description: nonEmptyString("Description").min(5, {
      message: "Description must be at least 5 characters long.",
    }),
    Patient: PatientRowSchema,
    Department: DepartmentRowSchema,
    ScheduledDate: datetime("Scheduled date"),
    Status: statusField("Status"),
    Bill: BillRowSchema,
    CreatedByReceptionist: ReceptionistRowSchema,
    CreatedAt: datetime("Creation date"),
    Doctors: z
      .array(
        z.object({
          ID: positiveNumber("Doctor"),
          Role: nonEmptyString("Doctor Role"),
        }),
      )
      .max(5, { message: "Maximum 5 doctors permitted" })
      .min(1, { message: "Minimum 1 doctor required" })
      .refine(
        (arr: Array<{ ID?: number; Role?: string }>) =>
          arr.every(
            (d) =>
              (!d.ID && !d.Role) || // both empty: ok
              (d.ID && d.Role && d.Role.trim().length > 2), // both present: ok
          ),
        {
          message: "Each doctor must have a role.",
        },
      ),
    Notes: z.string().optional(),
  })
  .refine((data) => {
    // removed console.log
    return data;
  });
