import { FormDepartmentSchema } from "../../formSchemas/general/department";
import { positiveNumber } from "../../reusableSchemas";

export const UpdateDepartmentSchema = FormDepartmentSchema.extend({
  ID: positiveNumber("Department ID", 1),
});
