import { z } from "zod";
import { positiveNumber } from "../../reusableSchemas";
import { AppointmentRowSchema } from "../../rowSchemas/appointment";
import { TestTypeRowSchema } from "../../rowSchemas/test/type";

export const TestOrderSchema = z.object({
  ID: positiveNumber("Test order", 1),
  Appointment: AppointmentRowSchema,
  TestType: TestTypeRowSchema,
});
