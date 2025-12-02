import { z } from "zod";
import { nonEmptyString, positiveNumber } from "../../reusableSchemas";

export const AdminRowSchema = z.object({
  ID: positiveNumber("Admin ID", 1),
  FullName: nonEmptyString("Full name", 3, 60),
});
