import { z } from "zod";
import { positiveNumber } from "../../reusableSchemas";
import { AppointmentRowSchema } from "../../rowSchemas";
import { TestTypeRowSchema } from "../../rowSchemas";

export const TestOrderSchema = z.object({
  ID: positiveNumber("Test order ID", 1),

  Appointment: AppointmentRowSchema,

  TestType: TestTypeRowSchema,
});
