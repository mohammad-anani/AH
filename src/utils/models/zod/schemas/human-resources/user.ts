import z from "zod";
import { nonEmptyString } from "../../reusableSchemas";

export const userSchema = z.object({
  Email: nonEmptyString("Email").email({
    message: "Invalid email format.",
  }),
});
