import { nonEmptyString, positiveNumber } from "../../reusableSchemas";
import { UpdateEmployeeSchema } from "./employee";

export const UpdateDoctorSchema = UpdateEmployeeSchema.extend({
  Specialization: nonEmptyString("Specialization", 5, 100)
  ,
  CostPerAppointment: positiveNumber("Cost per appointment", 1),
});
