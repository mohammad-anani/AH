import { FormEmployeeSchema } from "../../formSchemas/human-resources/employee";
import { positiveNumber } from "../../reusableSchemas";

export const UpdateEmployeeSchema = FormEmployeeSchema.extend({
  ID: positiveNumber("Employee ID", 1),
});
