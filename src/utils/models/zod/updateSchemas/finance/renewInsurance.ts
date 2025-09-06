import { z } from "zod";
import { date } from "../../reusableSchemas";

export const RenewInsuranceSchema = z.object({
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

  Coverage: z
    .number()
    .min(0, "Coverage must be at least 0")
    .max(1, "Coverage must be at most 1"),
});
