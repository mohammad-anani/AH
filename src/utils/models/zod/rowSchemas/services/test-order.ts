import { z } from "zod";
import { positiveNumber, nonEmptyString } from "../../reusableSchemas";

export const TestOrderRowSchema = z.object({
  ID: positiveNumber("Test order ID", 1),
  PatientFullName: nonEmptyString("Patient full name").min(3).max(60, {
    message: "Patient full name must be between 3 and 60 characters.",
  }),
  TestName: nonEmptyString("Test name").min(3).max(50, {
    message: "Test name must be between 3 and 50 characters.",
  }),
});
