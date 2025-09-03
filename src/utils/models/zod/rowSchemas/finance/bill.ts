import { BillSchema } from "../../schemas";

export const BillRowSchema = BillSchema.pick({
  ID: true,
  Amount: true,
  AmountPaid: true,
});
