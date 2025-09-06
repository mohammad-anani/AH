import { z } from "zod";
import { UpdateServiceSchema } from "./service";
import { nonEmptyString, positiveNumber } from "../../reusableSchemas";

export const UpdateOperationSchema = UpdateServiceSchema.extend({
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
        // Define the OperationDoctorDTO structure here
        // This would need to be defined based on your OperationDoctorDTO structure
      }),
    )
    .min(1, {
      message: "At least 1 doctor is required.",
    })
    .max(5, {
      message: "Maximum 5 doctors allowed.",
    }),
});
