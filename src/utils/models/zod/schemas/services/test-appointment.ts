import { z } from "zod";
import { positiveNumber } from "../../reusableSchemas";

import { ServiceSchema } from "./service";
import { TestOrderRowSchema, TestTypeRowSchema } from "../../rowSchemas";

export const TestAppointmentSchema = z.object({
  ID: positiveNumber("Test appointment ID", 1),

  TestOrder: TestOrderRowSchema.nullable(),

  TestType: TestTypeRowSchema,

  Service: ServiceSchema,
});
