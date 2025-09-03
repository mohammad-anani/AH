import { UpdateServiceSchema } from "./service";
import { positiveNumber } from "../../reusableSchemas";

export const UpdateTestAppointmentSchema = UpdateServiceSchema.extend({
  ID: positiveNumber("Test Appointment ID", 1),
});
