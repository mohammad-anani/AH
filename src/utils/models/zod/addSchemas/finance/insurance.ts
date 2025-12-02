import { FormInsuranceSchema } from "../../formSchemas/finance/insurance.ts";
import { dateWithinOneYear, positiveNumber } from "../../reusableSchemas.ts";

export const AddInsuranceSchema = FormInsuranceSchema.extend({
  PatientID: positiveNumber("Patient ID", 1),

  ExpirationDate: dateWithinOneYear("Expiration Date")

});
