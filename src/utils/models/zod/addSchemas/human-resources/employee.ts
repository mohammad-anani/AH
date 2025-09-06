import { z } from "zod";
import { AddPersonSchema } from "./person.ts";
import { date, positiveNumber } from "../../reusableSchemas";

// CreateEmployeeDTO - extends EmployeeFormDTO with password field (CreatedByAdminID removed as BindNever)
export const AddEmployeeSchema = AddPersonSchema.extend({
  DepartmentID: positiveNumber("Department ID", 1),

  Salary: z
    .number()
    .min(100, "Salary must be between 100 and 99,999")
    .max(99999, "Salary must be between 100 and 99,999")
    .refine((val) => Number.isInteger(val), {
      message: "Salary must be an integer",
    }),

  HireDate: date("Hire date"),

  WorkingDays: z.array(z.string()).default([]),

  ShiftStart: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, {
    message: "Shift start time must be in HH:MM format",
  }),

  ShiftEnd: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, {
    message: "Shift end time must be in HH:MM format",
  }),
})
  .refine(
    (data) => {
      // Validate that hire date is not in the future
      const today = new Date();
      const hireDate = new Date(data.HireDate);
      return hireDate <= today;
    },
    {
      message: "Hire date cannot be in the future",
      path: ["HireDate"],
    },
  )
  .refine(
    (data) => {
      // Validate that shift end is after shift start
      const [startHour, startMin] = data.ShiftStart.split(":").map(Number);
      const [endHour, endMin] = data.ShiftEnd.split(":").map(Number);
      const startMinutes = startHour * 60 + startMin;
      const endMinutes = endHour * 60 + endMin;
      return endMinutes > startMinutes;
    },
    {
      message: "Shift end time must be after shift start time",
      path: ["ShiftEnd"],
    },
  );
