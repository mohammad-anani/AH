import { z } from "zod";
import { nonEmptyString, positiveNumber } from "../../reusableSchemas";
import { DepartmentRowSchema } from "../../rowSchemas";
import { ServiceSchema } from "./service";

export const OperationSchema = z.object({
  ID: positiveNumber("Operation ID", 1),

  Name: nonEmptyString("Operation name", 3, 100),

  Department: DepartmentRowSchema,

  Description: nonEmptyString("Description", 5, 2000),

  Service: ServiceSchema,
});
