import { z } from "zod";
import { positiveNumber } from "../../reusableSchemas";
import { EmployeeSchema } from "./employee";

export const AdminSchema = z.object({
  ID: positiveNumber("Admin ID", 1),

  Employee: EmployeeSchema,
});
