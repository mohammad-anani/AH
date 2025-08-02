import z from "zod";
import { datetime, positiveNumber } from "../reusableSchemas";

export const BillSchema = z.object({
  ID: positiveNumber("ID"),
  Amount: positiveNumber("Amount"),
  AmountPaid: positiveNumber("Amount Paid"),
  CreatedByReceptionistID: positiveNumber("Receptionist ID"),
  CreatedAt: datetime("Creation Date"),
});
