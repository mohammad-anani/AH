import { z } from "zod";
import { positiveNumber, datetime } from "../../reusableSchemas";

export const FormPaymentSchema = z.object({
  Amount: positiveNumber("Amount"),

  PaymentDate: datetime("Payment date"),

  Method: z.enum(["Cash", "Credit", "Debit", "Insurance"], {
    message: "Method must be Cash, Credit, Debit, or Insurance.",
  }),

  BillID: positiveNumber("Bill ID", 1),
});
