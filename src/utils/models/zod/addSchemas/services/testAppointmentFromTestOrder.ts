import { z } from "zod";
import { datetime } from "../../reusableSchemas";

export const AddTestAppointmentFromTestOrderSchema = z.object({
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
});
