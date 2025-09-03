import { FormPrescriptionSchema } from "../../formSchemas/services/prescription";
import { positiveNumber } from "../../reusableSchemas";

export const AddPrescriptionSchema = FormPrescriptionSchema.extend({
  AppointmentID: positiveNumber("Appointment ID", 1),
});
