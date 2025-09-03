import { z } from "zod";
import { positiveNumber, nonEmptyString } from "../../reusableSchemas";

export const TestTypeRowSchema = z.object({
  ID: positiveNumber("Test type ID", 1),
  Name: nonEmptyString("Test type name").min(3).max(50, {
    message: "Test type name must be between 3 and 50 characters.",
  }),
  DepartmentName: nonEmptyString("Department name").min(5).max(20, {
    message: "Department name must be between 5 and 20 characters.",
  }),
  Cost: positiveNumber("Cost", 10, 999),
});
