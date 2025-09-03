import { FormPersonSchema } from "../../formSchemas/human-resources/person";
import { nonEmptyString } from "../../reusableSchemas";

export const AddPersonSchema = FormPersonSchema.extend({
  Password: nonEmptyString("Password").min(8).max(100, {
    message: "Password must be between 8 and 100 characters.",
  }),
});
