import { AdminSchema } from "../../schemas/human-resources/admin";
import { nonEmptyString } from "../../reusableSchemas";
export const AdminRowSchema = AdminSchema.pick({
  ID: true,
}).extend({
  Name: nonEmptyString("Name"),
});
