import { z } from "zod";
import { nonEmptyString } from "../../reusableSchemas";

export const FormDepartmentSchema = z.object({
  Name: nonEmptyString("Name").min(3).max(30, {
    message: "Name must be between 3 and 30 characters.",
  }),
  Phone: z
    .string()
    .regex(/^[0-9]{8}$/, "Phone must be exactly 8 digits")
    .nonempty("Phone is required"),
});
