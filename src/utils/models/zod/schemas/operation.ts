import { z } from "zod";
import {
  positiveNumber,
  nonEmptyString,
  datetime,
  statusField,
} from "../reusableSchemas";

export const OperationSchema = z.object({
  ID: positiveNumber("Operation ID", 1),
  Name: nonEmptyString("Operation name").min(2, {
    message: "Operation name must be at least 2 characters long.",
  }),
  Description: nonEmptyString("Description").min(5, {
    message: "Description must be at least 5 characters long.",
  }),
  PatientID: positiveNumber("Patient ID", 1),
  DepartmentID: positiveNumber("Department ID", 1),
  ScheduledDate: datetime("Scheduled date"),
  Status: statusField("Status"),
  BillID: positiveNumber("Payment ID", 1),
  CreatedByReceptionistID: positiveNumber("Receptionist ID", 1),
  CreatedAt: datetime("Creation date"),
  Doctors: z
    .array(
      z.tuple([
        positiveNumber("Doctor ID", 1),
        nonEmptyString("Doctor role").min(2, {
          message: "Doctor role must be at least 2 characters long.",
        }),
      ]),
    )
    .min(1, { message: "Minimum 1 doctor required" })
    .max(5, { message: "Maximum 5 doctors permitted" }),
  Notes: z.string().optional(),
});
