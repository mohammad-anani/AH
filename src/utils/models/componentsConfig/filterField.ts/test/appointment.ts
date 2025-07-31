// TestAppointmentFields.ts

import type { FilterKey } from "@/utils/models/types/utils/Form&Filter";
import {
  selectorField,
  datetimeField,
  uniselectField,
  stringField,
  generateAuditFields,
} from "../reusableFields";

export const testAppointmentFields: FilterKey[] = [
  selectorField("TestOrderID", "TestOrder"),
  selectorField("PatientID", "Patient"),
  datetimeField("ScheduledDate"),
  uniselectField("Status", ["Cancelled", "Accepted"]),
  stringField("Result"),
  datetimeField("ResultDate"),
  selectorField("ReceptionistID", "Receptionist"),
  ...generateAuditFields("Receptionist"),
];
