import { FormTestTypeSchema } from "../../formSchemas/services/testType";
import { positiveNumber } from "../../reusableSchemas";

export const UpdateTestTypeSchema = FormTestTypeSchema.extend({
  ID: positiveNumber("Test Type ID", 1),
});
