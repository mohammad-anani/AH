import { FormPersonSchema } from "../../formSchemas/human-resources/person";
import { positiveNumber } from "../../reusableSchemas";

export const UpdatePatientSchema = FormPersonSchema.extend({
  ID: positiveNumber("Patient ID", 1),
});
