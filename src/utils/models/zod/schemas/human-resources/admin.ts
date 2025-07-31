import { z } from "zod";
import { datetime, positiveNumber } from "../../reusableSchemas";
import { EmployeeSchema } from "./employee";

export const AdminSchema = z.object({
  ID: positiveNumber("Admin ID").refine((v) => v > 0, {
    message: "Admin ID is required.",
  }),

  Employee: EmployeeSchema,

  CreatedByAdminID: positiveNumber("Admin ID", 1).nullable(),

  CreatedAt: datetime("Creation date"),
});
