import { AddPersonSchema } from "./person.ts";

// CreatePatientDTO - extends CreatePersonDTO (CreatedByReceptionistID removed as BindNever)
export const AddPatientSchema = AddPersonSchema;
