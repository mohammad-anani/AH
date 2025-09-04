import { z } from "zod";
import { FormEmployeeSchema } from "../../formSchemas/human-resources/employee.ts";

// CreateEmployeeDTO - extends EmployeeFormDTO with password field (CreatedByAdminID removed as BindNever)
export const AddEmployeeSchema = FormEmployeeSchema.extend({
  Password: z
    .string()
    .min(8, "Password must be between 10 and 64 characters")
    .max(100, "Password must be between 10 and 64 characters")
    .nonempty("Password is required"),
});
