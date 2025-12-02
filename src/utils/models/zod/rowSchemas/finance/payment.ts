import { z } from "zod";
import { nonEmptyString, positiveNumber } from "../../reusableSchemas";

export const PaymentRowSchema = z.object({
  ID: positiveNumber("Payment ID", 1),
  Amount: positiveNumber("Amount", 1),
  Method: nonEmptyString("Method", 3, 50),
});
