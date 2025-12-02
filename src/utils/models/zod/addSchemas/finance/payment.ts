import { FormPaymentSchema } from "../../formSchemas/finance/payment.ts";

// CreatePaymentDTO - extends PaymentFormDTO with bill field (CreatedByReceptionistID removed as BindNever)
export const AddPaymentSchema = (maxNum: number) => FormPaymentSchema(maxNum).extend({});
