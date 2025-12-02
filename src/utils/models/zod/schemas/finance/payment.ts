import { z } from "zod";
import { datetime, positiveNumber } from "../../reusableSchemas";
import { ReceptionistRowSchema } from "../../rowSchemas";
import { BillSchema } from "./bill";

export const paymentMethods = ["Card", "Cash", "Insurance"] as const;

export const PaymentSchema = z.object({
  ID: positiveNumber("Payment ID", 1),

  Bill: BillSchema,

  Amount: positiveNumber("Amount", 1),

  Method: z.enum(paymentMethods, {
    message: "Payment method must be one of: Card, Cash, Insurance",
  }),

  CreatedAt: datetime("Created at"),

  CreatedByReceptionist: ReceptionistRowSchema,
});
