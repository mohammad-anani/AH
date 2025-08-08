import { z } from "zod";
import {
  positiveNumber,
  nonEmptyString,
  datetime,
  statusField,
} from "../reusableSchemas";

export const OperationSchema = z
  .object({
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
        z.object({
          Doctor: positiveNumber("Doctor"),
          Role: nonEmptyString("Doctor Role"),
        }),
      )
      .max(5, { message: "Maximum 5 doctors permitted" })
      .refine((arr: { Doctor: number; Role: string }[]) => {
        return (
          arr.some((d) => d.Doctor && d.Role && d.Role.trim()),
          { message: "At least one doctor and role required" }
        );
      })
      .refine(
        (arr: Array<{ doctor?: number; Role?: string }>) =>
          arr.every(
            (d) =>
              (!d.doctor && !d.Role) || // both empty: ok
              (d.doctor && d.Role && d.Role.trim()), // both present: ok
          ),
        {
          message: "Each doctor must have a role.",
        },
      ),
    Notes: z.string().optional(),
  })
  .refine((data) => {
    console.log(data);
    return data;
  });
