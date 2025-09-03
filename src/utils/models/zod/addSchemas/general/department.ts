import { FormDepartmentSchema } from "../../formSchemas/general/department";
import { positiveNumber } from "../../reusableSchemas";

export const AddDepartmentSchema = FormDepartmentSchema.extend({
  CreatedByAdminID: positiveNumber("Created By Admin ID", 1),
});
