import { z } from "zod";
import { positiveNumber, nonEmptyString } from "../../reusableSchemas";

export const FormTestTypeSchema = z.object({
  Name: nonEmptyString("Name").min(3).max(30, {
    message: "Name must be between 3 and 30 characters.",
  }),

  Price: positiveNumber("Price"),

  CreatedByAdminID: positiveNumber("Created By Admin ID", 1),
});
