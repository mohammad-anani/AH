import { z } from "zod";
import {
  positiveNumber,
  nonEmptyString,
  datetime,
  statusField,
} from "../reusableSchemas";
import { DoctorRowSchema } from "../rowSchemas/human-resources/doctor";
import { PatientRowSchema } from "../rowSchemas/human-resources/patient";
import { BillRowSchema } from "../rowSchemas/bill";
import { ReceptionistRowSchema } from "../rowSchemas/human-resources/receptionist";

export const AppointmentSchema = z.object({
  ID: positiveNumber("Appointment ID", 1),
  Doctor: DoctorRowSchema,
  Patient: PatientRowSchema,
  ScheduledDate: datetime("Appointment date and time"),
  Reason: nonEmptyString("Reason").min(5, {
    message: "Please provide a reason with at least 5 characters.",
  }),
  Status: statusField("Status"),
  Notes: z.string(),
  Bill: BillRowSchema,
  CreatedByReceptionist: ReceptionistRowSchema,
  CreatedAt: datetime("Creation date"),
});
