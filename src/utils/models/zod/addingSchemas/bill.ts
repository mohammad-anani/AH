import { FormBillSchema } from "../formSchemas/bill";

export const AddBillSchema = FormBillSchema.pick({ Amount: true });
