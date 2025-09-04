import { TestTypeSchema } from "../../schemas/general/test-type";
import { positiveNumber } from "../../reusableSchemas";

export const FormTestTypeSchema = TestTypeSchema.omit({
  Department: true,
  CreatedByAdmin: true,
  CreatedAt: true,
}).extend({
  DepartmentID: positiveNumber("Department ID", 1),
});
