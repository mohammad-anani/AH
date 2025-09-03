import { z } from "zod";
import { positiveNumber } from "../../reusableSchemas";
import { EmployeeSchema } from "./employee";

export const ReceptionistSchema = z.object({
  ID: positiveNumber("Receptionist ID", 1),

  Employee: EmployeeSchema,
});
