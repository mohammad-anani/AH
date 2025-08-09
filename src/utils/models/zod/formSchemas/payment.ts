import { PaymentSchema } from "../schemas";
import { positiveNumber } from "../reusableSchemas";

export const FormPaymentSchema = PaymentSchema.omit({
  Bill: true,
  CreatedByReceptionist: true,
}).extend({
  BillID: positiveNumber("Bill ID", 1),
  CreatedByReceptionistID: positiveNumber("Created By Receptionist ID", 1),
});
