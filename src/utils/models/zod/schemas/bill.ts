import z from "zod";
import { datetime, positiveNumber } from "../reusableSchemas";
import { ReceptionistRowSchema } from "../rowSchemas/human-resources/receptionist";

export const BillSchema = z.object({
  ID: positiveNumber("ID"),
  Amount: positiveNumber("Amount"),
  AmountPaid: positiveNumber("Amount Paid"),
  CreatedByReceptionist: ReceptionistRowSchema,
  CreatedAt: datetime("Creation Date"),
});
