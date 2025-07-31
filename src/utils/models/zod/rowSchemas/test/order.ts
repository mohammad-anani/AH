import { TestOrderSchema } from "../../schemas/test/order";
import { nonEmptyString } from "../../reusableSchemas";
export const TestOrderRowSchema = TestOrderSchema.pick({
  ID: true,
}).extend({
  PatientName: nonEmptyString("Patient name"),
  TestName: nonEmptyString("Test name"),
});
