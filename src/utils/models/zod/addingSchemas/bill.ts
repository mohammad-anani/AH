import { BillSchema } from "../schemas";

export const AddingBillSchema = BillSchema.pick({ Amount: true });
