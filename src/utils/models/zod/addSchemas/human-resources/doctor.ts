import { FormDoctorSchema } from "../../formSchemas/human-resources/doctor";
import { nonEmptyString } from "../../reusableSchemas";

export const AddDoctorSchema = FormDoctorSchema.extend({
  Password: nonEmptyString("Password").min(8).max(100, {
    message: "Password must be between 8 and 100 characters.",
  }),
});
