import { BillSchema } from "../schemas/finance/bill";

export const BillRowSchema = BillSchema.pick({
  ID: true,
  Amount: true,
  AmountPaid: true,
});
