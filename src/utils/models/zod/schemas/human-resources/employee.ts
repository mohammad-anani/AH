import { z } from "zod";
import { date, datetime, positiveNumber, time } from "../../reusableSchemas";
import { DepartmentRowSchema } from "../../rowSchemas";
import { AdminRowSchema } from "../../rowSchemas/human-resources/admin";
import { PersonSchema } from "./person";

export const validDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;


export const WorkingDaysSchema = z
  .array(z.enum(validDays, { message: "Invalid day of the week." }))
  .min(1, { message: "At least 1 day required" })
  .max(7, { message: "You cannot select more than 7 working days." })

export const EmployeeSchema = z.object({
  Person: PersonSchema,

  Department: DepartmentRowSchema.nullable(),

  Salary: positiveNumber("Salary", 100, 99999),

  HireDate: date("Hire date"),

  LeaveDate: date("Leave date").nullable(),

  WorkingDays: WorkingDaysSchema,

  ShiftStart: time("Shift start"),

  ShiftEnd: time("Shift end"),

  CreatedByAdmin: AdminRowSchema.nullable(),

  CreatedAt: datetime("Created at"),
});
