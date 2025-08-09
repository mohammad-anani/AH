import { FormPatientSchema } from "../../formSchemas/human-resources/patient";
import { AddPersonSchema } from "./person";

export const AddPatientSchema = FormPatientSchema.omit({
  ID: true,
  CreatedAt: true,
  CreatedByReceptionist: true,
}).extend({
  Person: AddPersonSchema,
});
