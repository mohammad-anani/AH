import { DoctorSchema } from "../../schemas/human-resources";
import { FormEmployeeSchema } from "./employee";

export const FormDoctorSchema = DoctorSchema.omit({
  Employee: true,
}).extend({
  Employee: FormEmployeeSchema,
});
