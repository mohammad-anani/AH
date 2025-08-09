import { DoctorSchema } from "../../schemas/human-resources";
import { positiveNumber } from "../../reusableSchemas";
import { FormEmployeeSchema } from "./employee";

export const FormDoctorSchema = DoctorSchema.omit({
  Employee: true,
  CreatedByAdmin: true,
}).extend({
  Employee: FormEmployeeSchema,
  CreatedByAdminID: positiveNumber("Created By Admin ID", 1),
});
