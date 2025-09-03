import { positiveNumber, nonEmptyString } from "../../reusableSchemas";
import { FormEmployeeSchema } from "./employee";

export const FormDoctorSchema = FormEmployeeSchema.extend({
  Specialization: nonEmptyString("Specialization").min(3).max(30, {
    message: "Specialization must be between 3 and 30 characters.",
  }),

  CreatedByAdminID: positiveNumber("Created By Admin ID", 1),
});
