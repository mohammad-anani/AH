import { z } from "zod";
import {
  datetime,
  nonEmptyString,
  positiveNumber,
} from "../../reusableSchemas";
import { EmployeeSchema } from "./employee";

export const AdminSchema = z.object({
  ID: positiveNumber("Admin ID").refine((v) => v > 0, {
    message: "Admin ID is required.",
  }),

  Employee: EmployeeSchema,

  CreatedByAdmin: z
    .object({
      ID: positiveNumber("Creator Admin ID"),
      Name: nonEmptyString("Creator Admin Name"),
    })
    .nullable(),

  CreatedAt: datetime("Creation date"),
});
