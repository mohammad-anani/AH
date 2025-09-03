import { TestTypeSchema } from "../../schemas/general/test-type";
import { positiveNumber } from "../../reusableSchemas";

export const FormTestTypeSchema = TestTypeSchema.omit({
  Department: true,
  CreatedByAdmin: true,
}).extend({
  DepartmentID: positiveNumber("Department ID", 1),
  CreatedByAdminID: positiveNumber("Created By Admin ID", 1),
});
