import { TestTypeSchema } from "../../schemas/general/test-type";
import { nonEmptyString } from "../../reusableSchemas";
export const TestTypeRowSchema = TestTypeSchema.pick({
  ID: true,
  Name: true,
}).extend({
  DepartmentName: nonEmptyString("Department name"),
});
