import { z } from "zod";
import { positiveNumber } from "../../reusableSchemas";

export const TestOrderSchema = z.object({
  ID: positiveNumber("Test order", 1),
  AppointmentID: positiveNumber(
    "Appointment",
    1,
    Number.MAX_SAFE_INTEGER,
    true,
  ),
  TestTypeID: positiveNumber("Test type", 1, Number.MAX_SAFE_INTEGER, true),
});
