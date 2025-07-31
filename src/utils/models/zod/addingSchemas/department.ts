import { DepartmentSchema } from "../schemas/department";

export const AddDepartmentSchema = DepartmentSchema.omit({
  ID: true,
  CreatedAt: true,
  CreatedByAdminID: true,
});
