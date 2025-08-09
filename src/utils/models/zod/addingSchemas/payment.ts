import { FormPaymentSchema } from "../formSchemas/payment";

export const AddPaymentSchema = FormPaymentSchema.pick({
  Amount: true,
  Method: true,
});
