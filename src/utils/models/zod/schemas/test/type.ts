import { z } from "zod";
import {
  positiveNumber,
  nonEmptyString,
  datetime,
} from "../../reusableSchemas";

export const TestTypeSchema = z.object({
  ID: positiveNumber("Test type ID", 1),
  DepartmentID: positiveNumber("Department ID", 1),
  Name: nonEmptyString("Test type name").min(2, {
    message: "Test type name must be at least 2 characters long.",
  }),
  Cost: positiveNumber("Cost", 1),
  CreatedByAdminID: positiveNumber("Creator Admin ID", 1),
  CreatedAt: datetime("Creation date"),
});
