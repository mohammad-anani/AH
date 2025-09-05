import { z } from "zod";
import { positiveNumber, nonEmptyString } from "../../reusableSchemas";

export const FormTestTypeSchema = z.object({
  Name: nonEmptyString("Test type name")
    .min(3, "Test type name must be between 3 and 50 characters")
    .max(50, "Test type name must be between 3 and 50 characters"),

  Cost: z
    .number({ message: "Cost must be a number" })
    .min(0, "Cost must be 0 or greater")
    .max(9999, "Cost must be less than 10,000"),

  DepartmentID: positiveNumber("Department ID", 1),
});
