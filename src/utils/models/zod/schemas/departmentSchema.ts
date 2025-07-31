import { z } from "zod";
import { positiveNumber, nonEmptyString, datetime } from "../reusableSchemas";

// Department schema

export const DepartmentSchema = z.object({
  ID: positiveNumber(false).refine((v) => v > 0, {
    message: "Department ID is required.",
  }),
  Name: nonEmptyString.min(3, {
    message: "Department name must be at least 3 characters long.",
  }),
  Phone: nonEmptyString.length(8, {
    message: "Phone number must be exactly 8 characters.",
  }),
  CreatedByAdminID: positiveNumber(false).refine((v) => v > 0, {
    message: "Creator Admin ID is required.",
  }),
  CreatedAt: datetime(true).refine(Boolean, {
    message: "Creation date is required.",
  }),
});
