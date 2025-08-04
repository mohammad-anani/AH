import z from "zod";
import { nonEmptyString } from "./reusableSchemas";

export const LoginSchema = z.object({
  Username: nonEmptyString("Username"),
  Password: nonEmptyString("Password"),
});
