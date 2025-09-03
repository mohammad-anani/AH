import { z } from "zod";
import { positiveNumber, nonEmptyString } from "../../reusableSchemas";

export const AdminRowSchema = z.object({
  ID: positiveNumber("Admin ID", 1),
  FullName: nonEmptyString("Full name").min(3).max(60, {
    message: "Full name must be between 3 and 60 characters.",
  }),
});
