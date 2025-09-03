import { z } from "zod";
import { positiveNumber, nonEmptyString } from "../../reusableSchemas";

export const DepartmentRowSchema = z.object({
  ID: positiveNumber("Department ID", 1),
  Name: nonEmptyString("Department name").min(5).max(20, {
    message: "Department name must be between 5 and 20 characters.",
  }),
  Phone: z.string().regex(/^[0-9]{8}$/, {
    message: "Phone must be exactly 8 digits.",
  }),
});
