import { DepartmentSchema } from "../schemas/department";
export const DepartmentRowSchema = DepartmentSchema.pick({
  ID: true,
  Name: true,
  Phone: true,
});
