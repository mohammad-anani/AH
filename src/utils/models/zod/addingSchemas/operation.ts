import { OperationSchema } from "../schemas/operation";

export const AddOperationSchema = OperationSchema.omit({
  ID: true,
  CreatedAt: true,
  CreatedByReceptionistID: true,
  Status: true,
  BillID: true,
});
