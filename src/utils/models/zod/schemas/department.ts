import { z } from "zod";
import { positiveNumber, nonEmptyString, datetime } from "../reusableSchemas";

export const DepartmentSchema = z.object({
  ID: positiveNumber("Department ID", 1),
  Name: nonEmptyString("Department Name").min(3, {
    message: "Department Name must be at least 3 characters long.",
  }),
  Phone: nonEmptyString("Phone").length(8, {
    message: "Phone must be exactly 8 characters.",
  }),
  CreatedByAdminID: positiveNumber("Creator Admin ID", 1),
  CreatedAt: datetime("Creation Date"),
});
