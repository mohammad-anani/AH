import { z } from "zod";
import { positiveNumber, nonEmptyString } from "../../reusableSchemas";
import { FormServiceSchema } from "./service";

export const FormOperationSchema = FormServiceSchema.extend({
  Name: nonEmptyString("Operation name").min(10).max(100, {
    message: "Operation name must be between 10 and 100 characters.",
  }),

  DepartmentID: positiveNumber("Department ID", 1),

  Description: nonEmptyString("Description").min(10, {
    message: "Description must be at least 10 characters.",
  }),

  OperationDoctors: z
    .array(
      z.object({
        ID: positiveNumber("Doctor ID"),
        Role: nonEmptyString("Role"),
      }),
    )
    .min(1, {
      message: "At least 1 doctor is required.",
    })
    .max(5, {
      message: "Maximum 5 doctors allowed.",
    }),
});
