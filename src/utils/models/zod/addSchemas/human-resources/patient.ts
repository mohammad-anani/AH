import { AddPersonSchema } from "./person";
import { positiveNumber } from "../../reusableSchemas";

export const AddPatientSchema = AddPersonSchema.extend({
  CreatedByReceptionistID: positiveNumber("Created By Receptionist ID", 1),
});
