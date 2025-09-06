import { AddEmployeeSchema } from "./employee.ts";
import { nonEmptyString, positiveNumber } from "../../reusableSchemas";

// CreateDoctorDTO - extends DoctorFormDTO with password field
export const AddDoctorSchema = AddEmployeeSchema.extend({
  Specialization: nonEmptyString("Specialization").min(5).max(100, {
    message: "Specialization must be between 5 and 100 characters.",
  }),

  CostPerAppointment: positiveNumber("Cost per appointment", 1),
});
