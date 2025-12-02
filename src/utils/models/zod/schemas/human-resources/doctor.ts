import { z } from "zod";
import { nonEmptyString, positiveNumber } from "../../reusableSchemas";
import { EmployeeSchema } from "./employee";

export const DoctorSchema = z.object({
  ID: positiveNumber("Doctor ID", 1),

  Employee: EmployeeSchema,

  CostPerAppointment: positiveNumber("Cost per appointment", 1),

  Specialization: nonEmptyString("Specialization", 5, 100),
});
