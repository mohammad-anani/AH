import { BillSchema } from "../schemas";
import { positiveNumber } from "../reusableSchemas";

export const FormBillSchema = BillSchema.omit({
  CreatedByReceptionist: true,
}).extend({
  CreatedByReceptionistID: positiveNumber("Created By Receptionist ID", 1),
});
