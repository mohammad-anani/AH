import { z } from "zod";
import { positiveNumber } from "../../reusableSchemas";

export const FormPaymentSchema = z.object({
  Amount: positiveNumber("Amount"),

  Method: z.enum(["Cash", "Credit", "Debit", "Insurance"], {
    message: "Method must be Cash, Credit, Debit, or Insurance.",
  }),
});
