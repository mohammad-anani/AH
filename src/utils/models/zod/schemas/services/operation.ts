import { z } from "zod";
import { positiveNumber, nonEmptyString } from "../../reusableSchemas";
import { DepartmentRowSchema } from "../../rowSchemas";
import { ServiceSchema } from "./service";

export const OperationSchema = z.object({
  ID: positiveNumber("Operation ID", 1),

  Name: nonEmptyString("Operation name").min(3).max(100, {
    message: "Operation name must be between 3 and 100 characters.",
  }),

  Department: DepartmentRowSchema,

  Description: nonEmptyString("Description").min(5).max(2000, {
    message: "Description must be between 5 and 2000 characters.",
  }),

  Service: ServiceSchema,
});
