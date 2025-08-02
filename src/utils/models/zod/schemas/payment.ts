import z from "zod";
import { datetime, positiveNumber } from "../reusableSchemas";

export const methods = ["Insurance", "Cash", "Card"];

export const PaymentSchema = z.object({
  ID: positiveNumber("ID"),
  BillID: positiveNumber("BillID"),
  Amount: positiveNumber("Amount"),
  Method: z.enum(methods, { error: "Method must be  " + methods.join(" or ") }),
  CreatedByReceptionistID: positiveNumber("Receptionist ID", 1),
  CreatedAt: datetime("Creation date"),
});
