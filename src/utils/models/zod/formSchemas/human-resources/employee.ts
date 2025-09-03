import {
  positiveNumber,
  nonEmptyString,
  datetime,
} from "../../reusableSchemas";
import { FormPersonSchema } from "./person";

export const FormEmployeeSchema = FormPersonSchema.extend({
  Salary: positiveNumber("Salary"),

  DepartmentID: positiveNumber("Department ID", 1),

  HireDate: datetime("Hire date"),

  Role: nonEmptyString("Role").min(3).max(30, {
    message: "Role must be between 3 and 30 characters.",
  }),
});
