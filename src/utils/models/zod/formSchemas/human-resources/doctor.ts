import { z } from "zod";
import { FormEmployeeSchema } from "./employee.ts";

// DoctorFormDTO - extends EmployeeFormDTO with doctor-specific fields
export const FormDoctorSchema = FormEmployeeSchema.extend({
  Specialization: z
    .string()
    .min(5, "Specialization must be between 5 and 100 characters")
    .max(100, "Specialization must be between 5 and 100 characters")
    .nonempty("Specialization is required"),

  CostPerAppointment: z
    .number({ message: "Cost per appointment must be a positive number" })
    .min(1, "Cost per appointment must be a positive number")
    .refine((val) => val > 0, "Cost per appointment is required"),
});

export type FormDoctorType = z.infer<typeof FormDoctorSchema>;
