import { FormServiceSchema } from "../../formSchemas/services/service";
import { positiveNumber, datetime } from "../../reusableSchemas";

export const AddServiceSchema = FormServiceSchema.extend({
  PatientID: positiveNumber("Patient ID", 1),

  ScheduledDate: datetime("Scheduled date").refine(
    (val) => {
      const schedDate = new Date(val);
      const now = new Date();
      const oneYearFromNow = new Date();
      oneYearFromNow.setFullYear(now.getFullYear() + 1);
      return schedDate > now && schedDate <= oneYearFromNow;
    },
    {
      message: "Scheduled date must be in the future and within one year.",
    },
  ),

  BillAmount: positiveNumber("Bill amount", 10, 99999),

  CreatedByReceptionistID: positiveNumber("Created By Receptionist ID", 1),
});
