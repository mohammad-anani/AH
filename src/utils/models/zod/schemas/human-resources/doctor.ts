import { z } from "zod";
import {
  datetime,
  nonEmptyString,
  positiveNumber,
} from "../../reusableSchemas";
import { EmployeeSchema } from "./employee";
import { AdminRowSchema } from "../../rowSchemas/human-resources/admin";

export const DoctorSchema = z.object({
  ID: positiveNumber("Doctor ID"),

  Employee: EmployeeSchema,

  Specialization: nonEmptyString("Specialization").min(2, {
    message: "Specialization must be at least 2 characters long.",
  }),

  AppointmentCost: positiveNumber("Appointment Cost"),

  CreatedByAdmin: AdminRowSchema,

  CreatedAt: datetime("Creation date"),
});
