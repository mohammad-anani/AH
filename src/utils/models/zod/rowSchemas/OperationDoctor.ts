import z from "zod";
import { DoctorRowSchema } from "./human-resources";
import { nonEmptyString } from "../reusableSchemas";

export const OperationDoctorRowSchema = z.object({
  Doctor: DoctorRowSchema,
  Role: nonEmptyString("Role"),
});
