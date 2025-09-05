import { z } from "zod";
import { FormPersonSchema } from "./person.ts";

// EmployeeFormDTO - extends PersonFormDTO with employee-specific fields

const validDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const FormEmployeeSchema = FormPersonSchema.extend({
  DepartmentID: z
    .number({ message: "Department must be a positive number" })
    .refine((val) => val > 0, "Department is required"),

  Salary: z
    .number({ message: "Salary must be a number" })
    .min(100, "Salary must be between 100 and 99,999")
    .max(99999, "Salary must be between 100 and 99,999")
    .refine((val) => val > 0, "Salary is required"),

  HireDate: z
    .string()
    .date()
    .refine((val) => val !== "", "Hire date is required"),

  WorkingDays: z
    .array(z.enum(validDays, { message: "Invalid day of the week." }))
    .min(1, { message: "At least 1 day required" })
    .max(7, { message: "You cannot select more than 7 working days." }),
  ShiftStart: z.iso.time("Shift start time is required"),

  ShiftEnd: z.iso.time("Shift end time is required"),
});

export type FormEmployeeType = z.infer<typeof FormEmployeeSchema>;
