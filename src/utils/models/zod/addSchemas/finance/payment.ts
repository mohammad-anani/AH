import { FormPaymentSchema } from "../../formSchemas/finance/payment.ts";

export const AddPaymentSchema = (maxNum: number) => FormPaymentSchema(maxNum);
