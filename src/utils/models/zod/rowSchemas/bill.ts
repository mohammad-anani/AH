import { BillSchema } from "../schemas/bill";

export const BillRowSchema = BillSchema.pick({
  ID: true,
  Amount: true,
  AmountPaid: true,
});
