import { z } from "zod";
import {
  datetime,
  nonEmptyString,
  phone,
  positiveNumber,
} from "../../reusableSchemas";
import { AdminRowSchema } from "../../rowSchemas";

export const DepartmentSchema = z.object({
  ID: positiveNumber("Department ID", 1),

  Name: nonEmptyString("Department name", 5, 20),

  Phone: phone,

  CreatedByAdmin: AdminRowSchema,

  CreatedAt: datetime("Created at"),
});
