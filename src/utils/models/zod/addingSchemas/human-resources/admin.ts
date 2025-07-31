import { AdminSchema } from "../../schemas/human-resources/admin";
import { AddEmployeeSchema } from "./employee";

export const AddAdminSchema = AdminSchema.omit({
  ID: true,
  CreatedAt: true,
  CreatedByAdminID: true,
}).extend({
  Employee: AddEmployeeSchema,
});
