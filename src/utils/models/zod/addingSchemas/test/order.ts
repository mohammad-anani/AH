import { FormTestOrderSchema } from "../../formSchemas/test/order";

export const AddTestOrderSchema = FormTestOrderSchema.omit({
  ID: true,
});
