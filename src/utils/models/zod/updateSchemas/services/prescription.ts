import { FormPrescriptionSchema } from "../../formSchemas/services/prescription";
import { positiveNumber } from "../../reusableSchemas";

export const UpdatePrescriptionSchema = FormPrescriptionSchema.extend({
  ID: positiveNumber("Prescription ID", 1),
});
