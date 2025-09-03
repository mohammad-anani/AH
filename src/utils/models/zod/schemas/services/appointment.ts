import { z } from "zod";
import { positiveNumber } from "../../reusableSchemas";
import { DoctorRowSchema } from "../../rowSchemas/human-resources/doctor";
import { ServiceSchema } from "./service";
import { AppointmentRowSchema } from "../../rowSchemas";

export const AppointmentSchema = z.object({
  ID: positiveNumber("Appointment ID", 1),

  PreviousAppointment: AppointmentRowSchema.nullable(),

  Doctor: DoctorRowSchema,

  Service: ServiceSchema,
});
