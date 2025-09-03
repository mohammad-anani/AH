import { AddServiceSchema } from "./service";
import { positiveNumber } from "../../reusableSchemas";

export const AddTestAppointmentSchema = AddServiceSchema.extend({
  TestOrderID: positiveNumber("Test Order ID", 1),

  TestTypeID: positiveNumber("Test Type ID", 1),
});
