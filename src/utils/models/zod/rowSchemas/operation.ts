import { OperationSchema } from "../schemas";
import { booleanField, nonEmptyString } from "../reusableSchemas";
export const OperationRowSchema = OperationSchema.pick({
  ID: true,
  Status: true,
}).extend({
  PatientName: nonEmptyString("Patient name"),
  Name: nonEmptyString("Name"),
  IsPaid: booleanField("Is Paid"),
});
