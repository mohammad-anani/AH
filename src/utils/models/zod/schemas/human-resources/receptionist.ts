import { z } from "zod";
import { datetime, positiveNumber } from "../../reusableSchemas";
import { EmployeeSchema } from "./employee";
import { AdminRowSchema } from "../../rowSchemas/human-resources/admin";

export const ReceptionistSchema = z.object({
  ID: positiveNumber("Receptionist ID"),

  Employee: EmployeeSchema,

  CreatedByAdmin: AdminRowSchema,

  CreatedAt: datetime("Creation date"),
});
