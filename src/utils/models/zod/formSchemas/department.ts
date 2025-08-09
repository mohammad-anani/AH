import { DepartmentSchema } from "../schemas/department";
import { positiveNumber } from "../reusableSchemas";

export const FormDepartmentSchema = DepartmentSchema.omit({
  CreatedByAdmin: true,
}).extend({
  CreatedByAdminID: positiveNumber("Created By Admin ID", 1),
});
