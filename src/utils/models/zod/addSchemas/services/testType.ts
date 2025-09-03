import { FormTestTypeSchema } from "../../formSchemas/services/testType";
import { positiveNumber } from "../../reusableSchemas";

export const AddTestTypeSchema = FormTestTypeSchema.extend({
  CreatedByAdminID: positiveNumber("Created By Admin ID", 1),
});
