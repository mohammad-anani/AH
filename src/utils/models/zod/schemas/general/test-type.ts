import { z } from "zod";
import {
  positiveNumber,
  nonEmptyString,
  datetime,
} from "../../reusableSchemas";
import { DepartmentRowSchema } from "../../rowSchemas/department";
import { AdminRowSchema } from "../../rowSchemas/human-resources/admin";

export const TestTypeSchema = z.object({
  ID: positiveNumber("Test type ID", 1),

  Name: nonEmptyString("Test type name").min(3).max(50, {
    message: "Test type name must be between 3 and 50 characters.",
  }),

  Department: DepartmentRowSchema,

  Cost: positiveNumber("Cost", 10, 999),

  CreatedByAdmin: AdminRowSchema,

  CreatedAt: datetime("Created at"),
});
