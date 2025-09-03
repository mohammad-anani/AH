import { FormOperationSchema } from "../../formSchemas/services/operation";
import { positiveNumber } from "../../reusableSchemas";

export const UpdateOperationSchema = FormOperationSchema.extend({
  ID: positiveNumber("Operation ID", 1),
});
