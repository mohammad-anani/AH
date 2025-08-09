import { FormDepartmentSchema } from "../formSchemas/department";

export const AddDepartmentSchema = FormDepartmentSchema.omit({
  ID: true,
  CreatedAt: true,
  CreatedByAdminID: true,
});
