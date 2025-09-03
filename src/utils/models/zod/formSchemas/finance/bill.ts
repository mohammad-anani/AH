import { BillSchema } from "../../schemas/finance/bill";
import { positiveNumber } from "../../reusableSchemas";

export const FormBillSchema = BillSchema.extend({
  CreatedByReceptionistID: positiveNumber("Created By Receptionist ID", 1),
});
