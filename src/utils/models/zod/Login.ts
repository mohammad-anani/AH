import z from "zod";
import { nonEmptyString } from "./reusableSchemas";

export const LoginSchema = z.object({
  Email: nonEmptyString("Email").email(),
  Password: nonEmptyString("Password"),
});
