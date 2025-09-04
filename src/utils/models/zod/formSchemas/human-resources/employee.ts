import { z } from "zod";
import { FormPersonSchema } from "./person.ts";

// EmployeeFormDTO - extends PersonFormDTO with employee-specific fields
export const FormEmployeeSchema = FormPersonSchema.extend({
  DepartmentID: z
    .number({ message: "Department ID must be a positive number" })
    .min(1, "Department ID must be a positive number")
    .refine((val) => val > 0, "Department ID is required"),

  Salary: z
    .number({ message: "Salary must be a number" })
    .min(100, "Salary must be between 100 and 99,999")
    .max(99999, "Salary must be between 100 and 99,999")
    .refine((val) => val > 0, "Salary is required"),

  HireDate: z
    .string()
    .datetime({ local: true })
    .refine((val) => val !== "", "Hire date is required"),

  WorkingDays: z.string().refine((val) => {
    // Validate working days string format
    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    const workingDays = val.split(",").map((d) => d.trim());
    return workingDays.every((day) => days.includes(day));
  }, "Invalid working days format"),

  ShiftStart: z.string().time("Shift start time is required"),

  ShiftEnd: z.string().time("Shift end time is required"),
});

export type FormEmployeeType = z.infer<typeof FormEmployeeSchema>;
