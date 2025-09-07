import { z } from "zod";
import { FormServiceSchema } from "../../formSchemas/services/service.ts";

// CreateServiceDTO - extends ServiceFormDTO with additional fields (CreatedByReceptionistID removed as BindNever)
export const AddServiceSchema = FormServiceSchema.extend({
  PatientID: z
    .number({ message: "Patient ID must be a positive number" })
    .min(1, "Patient ID must be a positive number")
    .refine((val) => val > 0, "Patient ID is required"),

  ScheduledDate: z
    .string()
    .datetime({ local: true })
    .refine((val) => {
      const schedDate = new Date(val);
      const now = new Date();
      const oneYearFromNow = new Date();
      oneYearFromNow.setFullYear(now.getFullYear() + 1);
      return schedDate > now && schedDate <= oneYearFromNow;
    }, "Scheduled date must be in the future and within one year")
    .refine((val) => val !== "", "Scheduled date is required"),
});
