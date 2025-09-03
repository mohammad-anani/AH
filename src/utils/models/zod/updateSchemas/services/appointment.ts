import { UpdateServiceSchema } from "./service";
import { positiveNumber } from "../../reusableSchemas";

export const UpdateAppointmentSchema = UpdateServiceSchema.extend({
  ID: positiveNumber("Appointment ID", 1),
});
