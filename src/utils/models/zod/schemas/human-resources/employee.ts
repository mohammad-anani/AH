import { z } from "zod";
import { positiveNumber, time, datetime } from "../../reusableSchemas";
import { PersonSchema } from "./person";
import { DepartmentRowSchema } from "../../rowSchemas";
import { AdminRowSchema } from "../../rowSchemas/human-resources/admin";

export const validDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

export const EmployeeSchema = z.object({
  Person: PersonSchema,

  Department: DepartmentRowSchema.nullable(),

  Salary: positiveNumber("Salary", 100, 99999),

  HireDate: datetime("Hire date"),

  LeaveDate: datetime("Leave date").nullable(),

  WorkingDays: z
    .array(z.enum(validDays, { message: "Invalid day of the week." }))
    .min(0)
    .max(7, { message: "You cannot select more than 7 working days." }),

  ShiftStart: time("Shift start"),

  ShiftEnd: time("Shift end"),

  CreatedByAdmin: AdminRowSchema.nullable(),

  CreatedAt: datetime("Created at"),
});
