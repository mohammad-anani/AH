import { z } from "zod";
import { positiveNumber } from "../../reusableSchemas";
import { paymentMethods } from "../../schemas";

export const FormPaymentSchema = (maxNum: number) => z.object({
  Amount: positiveNumber("Amount").max(maxNum, "Amount cannot exceed Bill amount"),

  Method: z.enum(paymentMethods, {
    message: "Method must be Cash, Card, or Insurance.",
  }),
});
