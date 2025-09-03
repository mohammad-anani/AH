import { PatientSchema } from "../../schemas/human-resources/patient";
import { nonEmptyString } from "../../reusableSchemas";
import { z } from "zod";
export const PatientRowSchema = PatientSchema.pick({
  ID: true,
}).extend({
  FullName: nonEmptyString("Name"),
  Age: z.number(),
  Phone: nonEmptyString("Phone"),
});
