import { z } from "zod";
import { datetime, positiveNumber } from "../../reusableSchemas";
import { PersonSchema } from "./person";
import { ReceptionistRowSchema } from "../../rowSchemas/human-resources/receptionist";

export const PatientSchema = z.object({
  ID: positiveNumber("Patient ID"),

  Person: PersonSchema,

  CreatedByReceptionist: ReceptionistRowSchema,

  CreatedAt: datetime("Creation date"),
});
