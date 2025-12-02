import { positiveNumber } from "../../reusableSchemas.ts";
import { AddServiceSchema } from "./service.ts";

export const AddAppointmentSchema = AddServiceSchema.extend({
  DoctorID: positiveNumber("Doctor ID", 1)
});
