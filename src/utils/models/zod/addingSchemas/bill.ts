import { BillSchema } from "../schemas";

export const AddBillSchema = BillSchema.pick({ Amount: true });
