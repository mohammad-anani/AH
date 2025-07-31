import { TestTypeSchema } from "../../schemas/test";

export const AddTestTypeSchema = TestTypeSchema.omit({
  ID: true,
  CreatedAt: true,
  CreatedByAdminID: true,
});
