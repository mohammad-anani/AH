import { FormEmployeeSchema } from "../../formSchemas/human-resources/employee";
import { AddPersonSchema } from "./person";

export const AddEmployeeSchema = FormEmployeeSchema.omit({
  LeaveDate: true,
  isActive: true,
}).extend({
  Person: AddPersonSchema,
});
