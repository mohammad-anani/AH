import { z } from "zod";
import { FormPaymentSchema } from "../../formSchemas/finance/payment.ts";

// CreatePaymentDTO - extends PaymentFormDTO with bill field (CreatedByReceptionistID removed as BindNever)
export const AddPaymentSchema = FormPaymentSchema.extend({
  BillID: z
    .number({ message: "Bill ID must be a positive number" })
    .min(1, "Bill ID must be a positive number")
    .refine((val) => val > 0, "Bill ID is required"),
});
