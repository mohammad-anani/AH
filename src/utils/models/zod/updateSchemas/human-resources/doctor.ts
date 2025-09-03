import { FormDoctorSchema } from "../../formSchemas/human-resources/doctor";
import { positiveNumber } from "../../reusableSchemas";

export const UpdateDoctorSchema = FormDoctorSchema.extend({
  ID: positiveNumber("Doctor ID", 1),
});
