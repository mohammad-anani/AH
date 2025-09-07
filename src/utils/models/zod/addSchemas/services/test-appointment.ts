import { AddServiceSchema } from "./service";
import { positiveNumber } from "../../reusableSchemas";

export const AddTestAppointmentSchema = AddServiceSchema.extend({
  TestTypeID: positiveNumber("Test Type ID", 1),
});
