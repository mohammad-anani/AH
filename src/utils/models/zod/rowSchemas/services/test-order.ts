import { z } from "zod";
import { nonEmptyString, positiveNumber } from "../../reusableSchemas";

export const TestOrderRowSchema = z.object({
  ID: positiveNumber("Test order ID", 1),
  PatientFullName: nonEmptyString("Patient full name", 3, 60),
  TestTypeName: nonEmptyString("Test name", 3, 50),
});
