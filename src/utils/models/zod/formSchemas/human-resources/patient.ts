import { PatientSchema } from "../../schemas/human-resources/patient";
import { FormPersonSchema } from "./person";

export const FormPatientSchema = PatientSchema.omit({
  Person: true,
  CreatedByReceptionist: true,
}).extend({
  Person: FormPersonSchema,
});
