import { EmployeeSchema } from "../../schemas/human-resources";
import { positiveNumber } from "../../reusableSchemas";
import { FormPersonSchema } from "./person";

export const FormEmployeeSchema = EmployeeSchema.omit({
  Person: true,
  Department: true,
}).extend({
  Person: FormPersonSchema,
  DepartmentID: positiveNumber("Department ID", 1),
});
