import { ReceptionistSchema } from "../../schemas/human-resources";
import { FormEmployeeSchema } from "./employee";

export const FormReceptionistSchema = ReceptionistSchema.omit({
  Employee: true,
  CreatedByAdmin: true,
}).extend({
  Employee: FormEmployeeSchema,
});
