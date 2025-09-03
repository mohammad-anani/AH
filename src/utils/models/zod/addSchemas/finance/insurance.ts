import { FormInsuranceSchema } from "../../formSchemas/finance/insurance";
import { positiveNumber, date } from "../../reusableSchemas";

export const AddInsuranceSchema = FormInsuranceSchema.extend({
  PatientID: positiveNumber("Patient ID", 1),

  ExpirationDate: date("Expiration date").refine(
    (val) => {
      const expDate = new Date(val);
      const now = new Date();
      const oneYearFromNow = new Date();
      oneYearFromNow.setFullYear(now.getFullYear() + 1);
      return expDate > now && expDate <= oneYearFromNow;
    },
    {
      message: "Expiration date must be in the future and within one year.",
    },
  ),

  CreatedByReceptionistID: positiveNumber("Created By Receptionist ID", 1),
});
