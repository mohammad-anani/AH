import { z } from "zod";
import { datetime, positiveNumber } from "../../reusableSchemas";
import { PersonSchema } from "./person";

export const PatientSchema = z.object({
  ID: positiveNumber("Patient ID"),

  Person: PersonSchema,

  CreatedByReceptionistID: positiveNumber("Receptionist ID"),

  CreatedAt: datetime("Creation date"),
});
