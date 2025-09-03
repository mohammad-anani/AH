import { z } from "zod";
import { positiveNumber, nonEmptyString } from "../../reusableSchemas";

export const FormDepartmentSchema = z.object({
  Name: nonEmptyString("Name").min(3).max(30, {
    message: "Name must be between 3 and 30 characters.",
  }),

  CreatedByAdminID: positiveNumber("Created By Admin ID", 1),
});
