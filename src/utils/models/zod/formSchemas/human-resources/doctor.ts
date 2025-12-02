import { z } from "zod";
import { nonEmptyString, positiveNumber } from "../../reusableSchemas.ts";
import { FormEmployeeSchema } from "./employee.ts";

export const FormDoctorSchema = FormEmployeeSchema.extend({
  Specialization: nonEmptyString("Specialization", 5, 100)
  ,
  CostPerAppointment: positiveNumber("Cost Per Appointment", 1)
});

export type FormDoctorType = z.infer<typeof FormDoctorSchema>;
