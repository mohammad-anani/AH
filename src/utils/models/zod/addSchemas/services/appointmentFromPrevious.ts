import { z } from "zod";

// CreateAppointmentFromPreviousDTO - standalone schema (AppointmentID and CreatedByReceptionistID removed as BindNever)
export const AddAppointmentFromPreviousSchema = z.object({
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

  Notes: z.string().optional(),
});
