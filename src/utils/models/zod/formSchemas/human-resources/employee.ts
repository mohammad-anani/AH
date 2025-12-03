import { z } from "zod";
import { WorkingDaysSchema } from "../../schemas/index.ts";
import { FormPersonSchema } from "./person.ts";



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

  WorkingDays: WorkingDaysSchema,
  ShiftStart: z.iso.time("Shift start time is required"),

  ShiftEnd: z.iso.time("Shift end time is required"),
});

export type FormEmployeeType = z.infer<typeof FormEmployeeSchema>;
