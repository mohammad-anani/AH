import { z } from "zod";
import { datetime, positiveNumber } from "../../reusableSchemas";
import { PersonSchema } from "./person";
import { ReceptionistRowSchema } from "../../rowSchemas";

export const PatientSchema = z.object({
  ID: positiveNumber("Patient ID", 1),

  Person: PersonSchema,

  CreatedByReceptionist: ReceptionistRowSchema,

  CreatedAt: datetime("Created at"),
});
