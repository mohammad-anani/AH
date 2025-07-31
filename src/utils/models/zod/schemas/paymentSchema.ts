import { z } from "zod";
import { positiveNumber } from "../reusableSchemas";

// Payment schema

export const PaymentSchema = z.object({
  ID: positiveNumber(false).refine((v) => v > 0, {
    message: "Payment ID is required.",
  }),
  Amount: positiveNumber(false).refine((v) => v > 0, {
    message: "Amount must be greater than zero.",
  }),
  PatientPaid: positiveNumber(true),
  InsurancePaid: positiveNumber(true),
  IsPaid: z.boolean(),
});

// Pay schema with refinement and message
export const PaySchema = PaymentSchema.extend({
  toPay: positiveNumber(false).refine((v) => v > 0, {
    message: "Amount to pay must be greater than zero.",
  }),
}).refine(
  (payment) => {
    return (
      payment.toPay <=
      payment.Amount - payment.InsurancePaid - payment.PatientPaid
    );
  },
  {
    message: "You cannot pay more than the remaining amount.",
    path: ["toPay"],
  },
);
