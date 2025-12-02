import { z } from "zod";
import { nonEmptyString, positiveNumber } from "../../reusableSchemas";
import { UpdateServiceSchema } from "./service";

export const UpdateOperationSchema = UpdateServiceSchema.extend({
  Name: nonEmptyString("Operation name", 10, 100),

  DepartmentID: positiveNumber("Department ID", 1),

  Description: nonEmptyString("Description", 10),

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
