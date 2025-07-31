import { z } from "zod";
import {
  positiveNumber,
  date,
  time,
  booleanField,
} from "../../reusableSchemas";
import { PersonSchema } from "./person";

const validDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as const;

export const EmployeeSchema = z.object({
  Person: PersonSchema,

  DepartmentID: positiveNumber("Department").refine((v) => v > 0, {
    message: "Department must be selected.",
  }),

  Salary: positiveNumber("Salary", 0.01).refine((v) => v > 0, {
    message: "Salary must be greater than zero.",
  }),

  HireDate: date("Hire date").refine((val) => new Date(val) <= new Date(), {
    message: "Hire date cannot be in the future.",
  }),

  LeaveDate: date("Leave date")
    .nullable()
    .refine((val) => !val || new Date(val) <= new Date(), {
      message: "Leave date cannot be in the future.",
    }),

  isActive: booleanField("Active status"),

  WorkingDays: z
    .array(z.enum(validDays, { message: "Invalid day of the week." }))
    .min(1, { message: "Please select at least one working day." })
    .max(7, { message: "You cannot select more than 7 working days." })
    .refine((arr) => new Set(arr).size === arr.length, {
      message: "Working days must be unique.",
    }),

  ShiftStart: time("Shift start"),
  ShiftEnd: time("Shift end"),
});
