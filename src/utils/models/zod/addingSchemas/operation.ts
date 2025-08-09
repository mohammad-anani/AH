import { FormOperationSchema } from "../formSchemas/operation";

export const AddOperationSchema = FormOperationSchema.omit({
  ID: true,
  CreatedAt: true,
  CreatedByReceptionistID: true,
  Status: true,
  BillID: true,
});
