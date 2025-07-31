import { z } from "zod";
import { datetime, positiveNumber } from "../../reusableSchemas";
import { EmployeeSchema } from "./employee";

export const ReceptionistSchema = z.object({
  ID: positiveNumber("Receptionist ID"),

  Employee: EmployeeSchema,

  CreatedByAdminID: positiveNumber("Admin ID", 1),

  CreatedAt: datetime("Creation date"),
});
