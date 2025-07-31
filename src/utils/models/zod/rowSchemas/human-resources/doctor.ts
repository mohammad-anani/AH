import { DoctorSchema } from "../../schemas/human-resources/doctor";
import { nonEmptyString } from "../../reusableSchemas";
export const DoctorRowSchema = DoctorSchema.pick({
  ID: true,
  Specialization: true,
}).extend({
  Name: nonEmptyString("Name"),
});
