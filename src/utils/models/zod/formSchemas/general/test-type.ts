import { z } from "zod";
import { nonEmptyString, positiveNumber } from "../../reusableSchemas";

export const FormTestTypeSchema = z.object({
  Name: nonEmptyString("Test type name", 3, 50),
  Cost: positiveNumber("Cost", 0, 9999),

  DepartmentID: positiveNumber("Department ID", 1),
});
