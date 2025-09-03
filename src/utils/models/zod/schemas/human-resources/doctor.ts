import { z } from "zod";
import { nonEmptyString, positiveNumber } from "../../reusableSchemas";
import { EmployeeSchema } from "./employee";

export const DoctorSchema = z.object({
  ID: positiveNumber("Doctor ID", 1),

  Employee: EmployeeSchema,

  CostPerAppointment: positiveNumber("Cost per appointment", 1),

  Specialization: nonEmptyString("Specialization").min(5).max(100, {
    message: "Specialization must be between 5 and 100 characters.",
  }),
});
