import { z } from "zod";
import { positiveNumber, nonEmptyString } from "../../reusableSchemas";

export const AdminRowSchema = z.object({
  ID: positiveNumber("Admin ID", 1),
  Name: nonEmptyString("Admin name"),
});
