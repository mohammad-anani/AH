// AppointmentFields.ts

import type { FilterKey } from "@/utils/models/types/utils/Form&Filter";
import {
  selectorField,
  datetimeField,
  stringField,
  uniselectField,
  generateAuditFields,
} from "./reusableFields";

export const appointmentFields: FilterKey[] = [
  selectorField("DoctorID", "Doctor"),
  selectorField("PatientID", "Patient"),
  datetimeField("Time"),
  stringField("Reason"),
  uniselectField("Status", ["Accepted", "Rejected"]),
  stringField("Notes"),
  selectorField("ReceptionistID", "Receptionist"),
  ...generateAuditFields("Receptionist"),
];
