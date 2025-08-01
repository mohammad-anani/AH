// TestAppointmentFields.ts

import type { FilterKey } from "@/utils/models/types/utils/Form&Filter";
import { datetimeField, uniselectField, stringField } from "../reusableFields";
import { testOrderFields } from "./order";
import { patientFields } from "../human-resources";
import { admingenerateAuditFields, adminSelectorField } from "../adminRoleUtil";

export const testAppointmentFields: FilterKey[] = [
  adminSelectorField("TestOrderID", "TestOrder", testOrderFields),
  adminSelectorField("PatientID", "Patient", patientFields),
  datetimeField("ScheduledDate"),
  uniselectField("Status", ["Cancelled", "Accepted"]),
  stringField("Result"),
  datetimeField("ResultDate"),
  ...admingenerateAuditFields("Receptionist"),
];
