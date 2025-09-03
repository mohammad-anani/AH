import { z } from "zod";
import { positiveNumber } from "../../reusableSchemas";

export const AddTestOrderSchema = z.object({
  AppointmentID: positiveNumber("Appointment ID", 1),

  TestTypeID: positiveNumber("Test Type ID", 1),
});
