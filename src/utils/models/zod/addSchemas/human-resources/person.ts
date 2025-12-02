import axios from "@/api/axios.ts";
import { FormPersonSchema } from "../../formSchemas/human-resources/person.ts";
import { nonEmptyString } from "../../reusableSchemas.ts";

export const AddPersonSchema = FormPersonSchema.extend({
  Password: nonEmptyString("Password", 8, 100),
  Email: nonEmptyString("Email", 8, 100).email().refine(async (email) => {
    if (!email || !email.length)
      return true;
    const response = await axios.post("/person/checkEmailAlreadyExists", email);
    return !response.data;
  }, "Email already exists."),
});
