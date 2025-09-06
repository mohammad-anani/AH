import { FormDoctorSchema } from "../../formSchemas/human-resources/doctor";
import { nonEmptyString, positiveNumber } from "../../reusableSchemas";

export const UpdateDoctorSchema = FormDoctorSchema.extend({
  Specialization: nonEmptyString("Specialization").min(5).max(100, {
    message: "Specialization must be between 5 and 100 characters.",
  }),

  CostPerAppointment: positiveNumber("Cost per appointment", 1),
});
