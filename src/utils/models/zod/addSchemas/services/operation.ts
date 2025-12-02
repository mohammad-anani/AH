
import { nonEmptyString, positiveNumber } from "../../reusableSchemas";
import { AddServiceSchema } from "./service";

export const AddOperationSchema = AddServiceSchema.extend({
  Name: nonEmptyString("Operation name", 10, 100),

  Amount: positiveNumber("Amount", 10),

  DepartmentID: positiveNumber("Department ID", 1),

  Description: nonEmptyString("Description", 10),
});
