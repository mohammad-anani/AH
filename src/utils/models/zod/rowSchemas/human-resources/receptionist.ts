import { z } from "zod";
import { nonEmptyString, positiveNumber } from "../../reusableSchemas";

export const ReceptionistRowSchema = z.object({
  ID: positiveNumber("Receptionist ID", 1),
  FullName: nonEmptyString("Full name", 3, 60),
});
