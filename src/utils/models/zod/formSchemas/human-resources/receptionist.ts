import { ReceptionistSchema } from "../../schemas/human-resources";
import { positiveNumber } from "../../reusableSchemas";
import { FormEmployeeSchema } from "./employee";

export const FormReceptionistSchema = ReceptionistSchema.omit({
  Employee: true,
  CreatedByAdmin: true,
}).extend({
  Employee: FormEmployeeSchema,
  CreatedByAdminID: positiveNumber("Created By Admin ID", 1),
});
