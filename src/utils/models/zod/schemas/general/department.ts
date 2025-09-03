import { z } from "zod";
import {
  positiveNumber,
  nonEmptyString,
  datetime,
} from "../../reusableSchemas";
import { AdminRowSchema } from "../../rowSchemas/human-resources/admin";

export const DepartmentSchema = z.object({
  ID: positiveNumber("Department ID", 1),

  Name: nonEmptyString("Department name").min(5).max(20, {
    message: "Department name must be between 5 and 20 characters.",
  }),

  Phone: z.string().regex(/^[0-9]{8}$/, {
    message: "Phone must be exactly 8 digits.",
  }),

  CreatedByAdmin: AdminRowSchema,

  CreatedAt: datetime("Created at"),
});
