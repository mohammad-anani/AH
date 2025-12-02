import { z } from "zod";
import { nonEmptyString, phone } from "../../reusableSchemas";

export const FormDepartmentSchema = z.object({
  Name: nonEmptyString("Name", 3, 30),
  Phone: phone
});
