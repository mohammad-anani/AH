import { DoctorSchema } from "../../schemas/human-resources";
import { AddEmployeeSchema } from "./employee";

export const AddDoctorSchema = DoctorSchema.omit({
  ID: true,
  CreatedAt: true,
  CreatedByAdminID: true,
}).extend({
  Employee: AddEmployeeSchema,
});
