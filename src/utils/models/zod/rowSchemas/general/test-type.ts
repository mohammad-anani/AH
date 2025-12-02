import { z } from "zod";
import { nonEmptyString, positiveNumber } from "../../reusableSchemas";

export const TestTypeRowSchema = z.object({
  ID: positiveNumber("Test type ID", 1),
  Name: nonEmptyString("Test type name", 3, 50),
  DepartmentName: nonEmptyString("Department name", 5, 20),
  Cost: positiveNumber("Cost", 10, 999),
});
