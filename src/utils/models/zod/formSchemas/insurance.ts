import { InsuranceSchema } from "../schemas/insurance";
import { positiveNumber } from "../reusableSchemas";

export const FormInsuranceSchema = InsuranceSchema.omit({
  Patient: true,
  CreatedByReceptionist: true,
}).extend({
  PatientID: positiveNumber("Patient ID", 1),
  CreatedByReceptionistID: positiveNumber("Created By Receptionist ID", 1),
});
