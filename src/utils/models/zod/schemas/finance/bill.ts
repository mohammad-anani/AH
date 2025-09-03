import { z } from "zod";
import { positiveNumber } from "../../reusableSchemas";

export const BillSchema = z.object({
  ID: positiveNumber("Bill ID", 1),

  Amount: positiveNumber("Amount", 1),

  AmountPaid: positiveNumber("Amount paid", 0),
});
