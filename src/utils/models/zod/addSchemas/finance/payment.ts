import { FormPaymentSchema } from "../../formSchemas/finance/payment";
import { positiveNumber } from "../../reusableSchemas";

export const AddPaymentSchema = FormPaymentSchema.extend({
  BillID: positiveNumber("Bill ID", 1),

  CreatedByReceptionistID: positiveNumber("Created By Receptionist ID", 1),
});
