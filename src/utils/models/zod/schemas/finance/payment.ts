import { z } from "zod";
import { datetime, positiveNumber } from "../../reusableSchemas";
import { BillRowSchema } from "../../rowSchemas";
import { ReceptionistRowSchema } from "../../rowSchemas";

export const methods = ["Card", "Cash", "Insurance"] as const;

export const PaymentSchema = z.object({
  ID: positiveNumber("Payment ID", 1),

  Bill: BillRowSchema,

  Amount: positiveNumber("Amount", 1),

  Method: z.enum(methods, {
    message: "Payment method must be one of: Card, Cash, Insurance",
  }),

  CreatedAt: datetime("Created at"),

  CreatedByReceptionist: ReceptionistRowSchema,
});
