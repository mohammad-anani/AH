import { z } from "zod";
import {
  datetime,
  nonEmptyString,
  positiveNumber,
} from "../../reusableSchemas";
import { AdminRowSchema, DepartmentRowSchema } from "../../rowSchemas";

export const TestTypeSchema = z.object({
  ID: positiveNumber("Test type ID", 1),

  Name: nonEmptyString("Test type name", 3, 50),

  Department: DepartmentRowSchema,

  Cost: positiveNumber("Cost", 10, 999),

  CreatedByAdmin: AdminRowSchema,

  CreatedAt: datetime("Created at"),
});
