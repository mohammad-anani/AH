import { nonEmptyString, positiveNumber } from "../../reusableSchemas";
import { AddEmployeeSchema } from "./employee.ts";

export const AddDoctorSchema = AddEmployeeSchema.extend({
  Specialization: nonEmptyString("Specialization", 5, 100),

  CostPerAppointment: positiveNumber("Cost per appointment", 1),
});
