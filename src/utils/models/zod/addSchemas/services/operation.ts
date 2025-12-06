
import z from "zod";
import { nonEmptyString, positiveNumber } from "../../reusableSchemas";
import { AddServiceSchema } from "./service";

export const AddOperationSchema = AddServiceSchema.extend({
  Name: nonEmptyString("Operation name", 10, 100),

  Amount: positiveNumber("Amount", 10),

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
