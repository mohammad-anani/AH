import { z } from "zod";
import {
  positiveNumber,
  nonEmptyString,
  datetime,
} from "../../reusableSchemas";

export const TestTypeSchema = z.object({
  ID: positiveNumber("Test type", 1),
  Department: positiveNumber("Department", 1, Number.MAX_SAFE_INTEGER, true),
  Name: nonEmptyString("Test type name").min(2, {
    message: "Test type name must be at least 2 characters long.",
  }),
  Cost: positiveNumber("Cost", 1),
  CreatedByAdminID: positiveNumber("Creator Admin"),
  CreatedAt: datetime("Creation date"),
});
