import { FormPrescriptionSchema } from "../../formSchemas/services/prescription.ts";
import { positiveNumber } from "../../reusableSchemas.ts";

export const AddPrescriptionSchema = FormPrescriptionSchema.extend({
  AppointmentID: positiveNumber("Appointment ID", 1)
});
