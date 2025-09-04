import { z } from "zod";
import { AddServiceSchema } from "./service.ts";

// CreateAppointmentDTO - extends CreateServiceDTO with doctor field
export const AddAppointmentSchema = AddServiceSchema.extend({
  DoctorID: z
    .number({ message: "Doctor ID must be a positive number" })
    .min(1, "Doctor ID must be a positive number")
    .refine((val) => val > 0, "Doctor ID is required"),
});
