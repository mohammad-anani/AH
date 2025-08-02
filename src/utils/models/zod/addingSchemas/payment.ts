import { PaymentSchema } from "../schemas";

export const AddPaymentSchema = PaymentSchema.pick({
  Amount: true,
  Method: true,
});
