import { z } from "zod";
import { positiveNumber, datetime } from "../../reusableSchemas";

export const AddAppointmentFromPreviousSchema = z.object({
  AppointmentID: positiveNumber("Appointment ID", 1),

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

  Notes: z.string().optional(),

  CreatedByReceptionistID: positiveNumber("Created By Receptionist ID", 1),
});
