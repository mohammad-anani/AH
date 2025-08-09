import { datetime, positiveNumber } from "../reusableSchemas";
import { OperationSchema } from "../schemas/operation";

export const FormOperationSchema = OperationSchema.omit({
  ScheduledDate: true,
  Patient: true,
  Department: true,
  Bill: true,
  CreatedByReceptionist: true,
}).extend({
  ScheduledDate: datetime("Scheduled date").refine(
    (val) => new Date(val) > new Date(),
    {
      message: "Date must be in the future.",
    },
  ),
  PatientID: positiveNumber("Patient ID", 1),
  DepartmentID: positiveNumber("Department ID", 1),
  BillID: positiveNumber("Bill ID", 1),
  CreatedByReceptionistID: positiveNumber("Created By Receptionist ID", 1),
});
