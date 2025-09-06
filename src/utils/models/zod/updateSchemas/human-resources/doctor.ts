import { nonEmptyString, positiveNumber } from "../../reusableSchemas";
import { UpdateEmployeeSchema } from "./employee";

export const UpdateDoctorSchema = UpdateEmployeeSchema.extend({
  Specialization: nonEmptyString("Specialization").min(5).max(100, {
    message: "Specialization must be between 5 and 100 characters.",
  }),

  CostPerAppointment: positiveNumber("Cost per appointment", 1),
});
