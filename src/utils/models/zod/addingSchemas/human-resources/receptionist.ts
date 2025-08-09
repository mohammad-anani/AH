import { FormReceptionistSchema } from "../../formSchemas/human-resources/receptionist";
import { AddEmployeeSchema } from "./employee";

export const AddReceptionistSchema = FormReceptionistSchema.omit({
  ID: true,
  CreatedAt: true,
  CreatedByAdminID: true,
}).extend({
  Employee: AddEmployeeSchema,
});
