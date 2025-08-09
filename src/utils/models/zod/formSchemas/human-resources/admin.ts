import { AdminSchema } from "../../schemas/human-resources/admin";
import { FormEmployeeSchema } from "./employee";

export const FormAdminSchema = AdminSchema.omit({
  Employee: true,
}).extend({
  Employee: FormEmployeeSchema,
});
