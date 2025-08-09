import { FormAdminSchema } from "../../formSchemas/human-resources/admin";
import { AddEmployeeSchema } from "./employee";

export const AddAdminSchema = FormAdminSchema.omit({
  ID: true,
  CreatedAt: true,
  CreatedByAdminID: true,
}).extend({
  Employee: AddEmployeeSchema,
});
