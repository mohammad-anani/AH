import { PatientSchema } from "../../schemas/human-resources/patient";
import { positiveNumber } from "../../reusableSchemas";
import { FormPersonSchema } from "./person";

export const FormPatientSchema = PatientSchema.omit({
  Person: true,
  CreatedByReceptionist: true,
}).extend({
  Person: FormPersonSchema,
  CreatedByReceptionistID: positiveNumber("Created By Receptionist ID", 1),
});
