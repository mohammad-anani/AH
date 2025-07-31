import { PatientSchema } from "../../schemas/human-resources/patient";
import { AddPersonSchema } from "./person";

export const AddPatientSchema = PatientSchema.omit({
  ID: true,
  CreatedAt: true,
  CreatedByReceptionistID: true,
}).extend({
  Person: AddPersonSchema,
});
