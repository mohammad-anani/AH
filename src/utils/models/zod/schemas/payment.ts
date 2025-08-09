import z from "zod";
import { datetime, positiveNumber } from "../reusableSchemas";
import { BillRowSchema } from "../rowSchemas/bill";
import { ReceptionistRowSchema } from "../rowSchemas/human-resources/receptionist";

export const methods = ["Insurance", "Cash", "Card"];

export const PaymentSchema = z.object({
  ID: positiveNumber("ID"),
  Bill: BillRowSchema,
  Amount: positiveNumber("Amount"),
  Method: z.enum(methods, { error: "Method must be  " + methods.join(" or ") }),
  CreatedByReceptionist: ReceptionistRowSchema,
  CreatedAt: datetime("Creation date"),
});
