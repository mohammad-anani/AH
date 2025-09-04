import { z } from "zod";
import { FormDoctorSchema } from "../../formSchemas/human-resources/doctor.ts";

// CreateDoctorDTO - extends DoctorFormDTO with password field
export const AddDoctorSchema = FormDoctorSchema.extend({
  Password: z
    .string()
    .min(8, "Password must be between 10 and 64 characters")
    .max(100, "Password must be between 10 and 64 characters")
    .nonempty("Password is required"),
});
