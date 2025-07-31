import { ReceptionistSchema } from "../../schemas/human-resources";
import { AddEmployeeSchema } from "./employee";

export const AddReceptionistSchema = ReceptionistSchema.omit({
  ID: true,
  CreatedAt: true,
  CreatedByAdminID: true,
}).extend({
  Employee: AddEmployeeSchema,
});
