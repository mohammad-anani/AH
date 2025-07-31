import { OperationSchema } from "../schemas";
import { nonEmptyString } from "../reusableSchemas";
export const OperationRowSchema = OperationSchema.pick({
  ID: true,
}).extend({
  PatientName: nonEmptyString("Patient name"),
  Name: nonEmptyString("Name"),
});
