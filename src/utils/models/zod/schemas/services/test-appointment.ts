import { z } from "zod";
import { positiveNumber } from "../../reusableSchemas";
import { TestTypeRowSchema } from "../../rowSchemas/test/type";
import { TestOrderRowSchema } from "../../rowSchemas/test/order";
import { ServiceSchema } from "./service";

export const TestAppointmentSchema = z.object({
  ID: positiveNumber("Test appointment ID", 1),

  TestOrder: TestOrderRowSchema,

  TestType: TestTypeRowSchema,

  Service: ServiceSchema,
});
