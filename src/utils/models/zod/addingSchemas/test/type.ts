import { FormTestTypeSchema } from "../../formSchemas/test/type";

export const AddTestTypeSchema = FormTestTypeSchema.omit({
  ID: true,
  CreatedAt: true,
  CreatedByAdmin: true,
});
