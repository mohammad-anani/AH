import { z } from "zod";
import { positiveNumber } from "../../reusableSchemas";

export const FormPaymentSchema = z.object({
  Amount: positiveNumber("Amount"),

  Method: z.enum(["Cash", "Card", "Insurance"], {
    message: "Method must be Cash, Card, or Insurance.",
  }),
});
