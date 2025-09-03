import { z } from "zod";
import { positiveNumber, nonEmptyString } from "../../reusableSchemas";

export const ReceptionistRowSchema = z.object({
  ID: positiveNumber("Receptionist ID", 1),
  FullName: nonEmptyString("Full name").min(3).max(60, {
    message: "Full name must be between 3 and 60 characters.",
  }),
});
