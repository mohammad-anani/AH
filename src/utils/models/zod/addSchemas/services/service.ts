import { FormServiceSchema } from "../../formSchemas/services/service.ts";
import { datetimeWithinOneYear, positiveNumber } from "../../reusableSchemas.ts";

export const AddServiceSchema = FormServiceSchema.extend({
  PatientID: positiveNumber("Patient ID", 1,),

  ScheduledDate: datetimeWithinOneYear("Scheduled Date")
});
