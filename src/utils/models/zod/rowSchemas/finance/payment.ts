import { z } from "zod";
import { positiveNumber, nonEmptyString } from "../../reusableSchemas";

export const PaymentRowSchema = z.object({
  ID: positiveNumber("Payment ID", 1),
  Amount: positiveNumber("Amount", 1),
  Method: nonEmptyString("Method").min(3).max(50, {
    message: "Method must be between 3 and 50 characters.",
  }),
});
