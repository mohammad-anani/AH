import { PaymentSchema } from "../schemas";

export const PaymentRowSchema = PaymentSchema.pick({
  ID: true,
  Amount: true,
  Method: true,
});
