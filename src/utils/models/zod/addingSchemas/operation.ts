import { FormOperationSchema } from "../formSchemas/operation";

export const AddOperationSchema = FormOperationSchema.omit({
  ID: true,
  CreatedAt: true,
  CreatedByReceptionist: true,
  Status: true,
  Bill: true,
});
