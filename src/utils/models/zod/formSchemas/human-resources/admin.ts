import { AdminSchema } from "../../schemas/human-resources/admin";
import { positiveNumber } from "../../reusableSchemas";
import { FormEmployeeSchema } from "./employee";

export const FormAdminSchema = AdminSchema.omit({
  Employee: true,
  CreatedByAdmin: true,
}).extend({
  Employee: FormEmployeeSchema,
  CreatedByAdminID: positiveNumber("Created By Admin ID", 1).nullable(),
});
