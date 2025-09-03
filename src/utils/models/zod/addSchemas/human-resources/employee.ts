import { FormEmployeeSchema } from "../../formSchemas/human-resources/employee";
import { nonEmptyString, positiveNumber } from "../../reusableSchemas";

export const AddEmployeeSchema = FormEmployeeSchema.extend({
  Password: nonEmptyString("Password").min(8).max(100, {
    message: "Password must be between 8 and 100 characters.",
  }),

  CreatedByAdminID: positiveNumber("Created By Admin ID", 1),
});
