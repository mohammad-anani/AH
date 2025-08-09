import { EmployeeSchema } from "../../schemas/human-resources";

import { FormPersonSchema } from "./person";

export const FormEmployeeSchema = EmployeeSchema.omit({
  Person: true,
}).extend({
  Person: FormPersonSchema,
});
