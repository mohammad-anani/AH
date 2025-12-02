import { z } from "zod";
import { positiveNumber } from "../../reusableSchemas";

export const FormPaymentSchema = (maxNum: number) => z.object({
  Amount: positiveNumber("Amount").max(maxNum, "Amount cannot exceed Bill amount"),

  Method: z.enum(["Cash", "Card", "Insurance"], {
    message: "Method must be Cash, Card, or Insurance.",
  }),
});
