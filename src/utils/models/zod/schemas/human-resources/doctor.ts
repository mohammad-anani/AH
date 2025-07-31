import { z } from "zod";
import {
  datetime,
  nonEmptyString,
  positiveNumber,
} from "../../reusableSchemas";
import { EmployeeSchema } from "./employee";

export const DoctorSchema = z.object({
  ID: positiveNumber("Doctor ID"),

  Employee: EmployeeSchema,

  Specialization: nonEmptyString("Specialization").min(2, {
    message: "Specialization must be at least 2 characters long.",
  }),

  CreatedByAdminID: positiveNumber("Admin ID", 1),

  CreatedAt: datetime("Creation date"),
});
