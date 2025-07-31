import { z } from "zod";
import { positiveNumber } from "../../reusableSchemas";

export const TestOrderSchema = z.object({
  ID: positiveNumber("Test order ID", 1),
  AppointmentID: positiveNumber("Appointment ID", 1),
  TestTypeID: positiveNumber("Test type ID", 1),
});
