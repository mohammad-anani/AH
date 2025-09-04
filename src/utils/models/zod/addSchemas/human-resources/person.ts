import { z } from "zod";
import { FormPersonSchema } from "../../formSchemas/human-resources/person.ts";

// CreatePersonDTO - extends PersonFormDTO with password field
export const AddPersonSchema = FormPersonSchema.extend({
  Password: z
    .string()
    .min(8, "Password must be between 10 and 64 characters")
    .max(100, "Password must be between 10 and 64 characters")
    .nonempty("Password is required"),
});
