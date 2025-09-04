import { FormTestTypeSchema } from "../../formSchemas/general/test-type.ts";

// CreateTestTypeDTO - extends TestTypeFormDTO (CreatedByAdminID removed as BindNever)
export const AddTestTypeSchema = FormTestTypeSchema;
