import { FormTestTypeSchema } from "../../formSchemas/general/test-type";

export const AddTestTypeSchema = FormTestTypeSchema.omit({
  ID: true,
  CreatedAt: true,
  CreatedByAdminID: true,
});
