import { ReceptionistSchema } from "../../schemas/human-resources/receptionist";
import { nonEmptyString } from "../../reusableSchemas";
export const ReceptionistRowSchema = ReceptionistSchema.pick({
  ID: true,
}).extend({
  Name: nonEmptyString("Name"),
});
