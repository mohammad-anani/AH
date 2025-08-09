import { FormDoctorSchema } from "../../formSchemas/human-resources/doctor";
import { AddEmployeeSchema } from "./employee";

export const AddDoctorSchema = FormDoctorSchema.omit({
  ID: true,
  CreatedAt: true,
  CreatedByAdminID: true,
}).extend({
  Employee: AddEmployeeSchema,
});
