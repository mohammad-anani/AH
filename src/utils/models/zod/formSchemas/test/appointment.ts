import { datetime, positiveNumber } from "../../reusableSchemas";
import { TestAppointmentSchema } from "../../schemas/test";

export const FormTestAppointmentSchema = TestAppointmentSchema.omit({
  ScheduledDate: true,
  TestOrder: true,
  Test: true,
  Patient: true,
  Bill: true,
  CreatedByReceptionist: true,
}).extend({
  ScheduledDate: datetime("Scheduled date").refine(
    (val) => new Date(val) > new Date(),
    {
      message: "Date must be in the future.",
    },
  ),
  TestOrderID: positiveNumber("Test Order ID", 1).nullable(),
  TestID: positiveNumber("Test ID", 1),
  PatientID: positiveNumber("Patient ID", 1),
  BillID: positiveNumber("Bill ID", 1),
  CreatedByReceptionistID: positiveNumber("Created By Receptionist ID", 1),
});
