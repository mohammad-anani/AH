import { EmployeeSchema } from "../../schemas/human-resources";
import { AddPersonSchema } from "./person";

export const AddEmployeeSchema = EmployeeSchema.omit({
  LeaveDate: true,
  isActive: true,
}).extend({
  Person: AddPersonSchema,
});
