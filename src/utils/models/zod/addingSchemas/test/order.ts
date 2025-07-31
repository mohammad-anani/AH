import { TestOrderSchema } from "../../schemas/test";

export const AddTestOrderSchema = TestOrderSchema.omit({
  ID: true,
});
