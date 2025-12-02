import { z } from "zod";
import { FormPersonSchema } from "../../formSchemas/human-resources/person.ts";
import axios from "@/api/axios.ts";

// CreatePersonDTO - extends PersonFormDTO with password field
export const AddPersonSchema = FormPersonSchema.extend({
  Password: z
    .string()
    .min(8, "Password must be between 10 and 64 characters")
    .max(100, "Password must be between 10 and 64 characters")
    .nonempty("Password is required"),
  Email: z
    .string()
    .min(6, "Email must be between 6 and 40 characters")
    .max(40, "Email must be between 6 and 40 characters")
    .regex(/^[^@\s]+@[^@\s]+\.[^@\s]+$/, "Invalid email format")
    .nonempty("Email is required").refine(async (email) => {


      if (!email || !email.length)
        return true;

      const response = await axios.post("/person/checkEmailAlreadyExists", email);

      console.log(response);

      return !response.data;


    }, "Email already exists."),
});
