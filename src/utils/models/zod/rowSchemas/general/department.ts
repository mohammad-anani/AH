import { z } from "zod";
import { nonEmptyString, phone, positiveNumber } from "../../reusableSchemas";

export const DepartmentRowSchema = z.object({
  ID: positiveNumber("Department ID", 1),
  Name: nonEmptyString("Department name", 5, 20),
  Phone: phone,
});
