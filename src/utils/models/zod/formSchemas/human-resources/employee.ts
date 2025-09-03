import { z } from "zod";
import {
  positiveNumber,
  nonEmptyString,
  datetime,
  time,
} from "../../reusableSchemas";
import { FormPersonSchema } from "./person";
import { validDays } from "../../schemas";

export const FormEmployeeSchema = FormPersonSchema.extend({
  Salary: positiveNumber("Salary"),

  DepartmentID: positiveNumber("Department ID", 1),

  HireDate: datetime("Hire date"),

  Role: nonEmptyString("Role").min(3).max(30, {
    message: "Role must be between 3 and 30 characters.",
  }),

  WorkingDays: z
    .array(z.enum(validDays, { message: "Invalid day of the week." }))
    .min(0)
    .max(7, { message: "You cannot select more than 7 working days." }),

  ShiftStart: time("Shift start"),

  ShiftEnd: time("Shift end"),
});
