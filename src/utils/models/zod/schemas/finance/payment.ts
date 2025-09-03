import { z } from "zod";
import {
  datetime,
  positiveNumber,
  nonEmptyString,
} from "../../reusableSchemas";
import { BillRowSchema } from "../../rowSchemas";
import { ReceptionistRowSchema } from "../../rowSchemas";

export const methods = ["Insurance", "Cash", "Card"];

export const PaymentSchema = z.object({
  ID: positiveNumber("Payment ID", 1),

  Bill: BillRowSchema,

  Amount: positiveNumber("Amount", 1),

  Method: nonEmptyString("Method").min(3).max(50, {
    message: "Method must be between 3 and 50 characters.",
  }),

  CreatedAt: datetime("Created at"),

  CreatedByReceptionist: ReceptionistRowSchema,
});
