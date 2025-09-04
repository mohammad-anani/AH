import { z } from "zod";
import { FormPrescriptionSchema } from "../../formSchemas/services/prescription.ts";

// CreatePrescriptionDTO - extends PrescriptionFormDTO with appointment field
export const AddPrescriptionSchema = FormPrescriptionSchema.extend({
  AppointmentID: z
    .number({ message: "Appointment ID must be a positive number" })
    .min(1, "Appointment ID must be a positive number")
    .refine((val) => val > 0, "Appointment ID is required"),
});
