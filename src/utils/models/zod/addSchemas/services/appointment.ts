import { AddServiceSchema } from "./service";
import { positiveNumber } from "../../reusableSchemas";

export const AddAppointmentSchema = AddServiceSchema.extend({
  DoctorID: positiveNumber("Doctor ID", 1),
});
