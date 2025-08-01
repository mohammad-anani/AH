// PatientFields.ts

import type { FilterKey } from "@/utils/models/types/utils/Form&Filter";
import { personFields } from "./person";
import { admingenerateAuditFields } from "../adminRoleUtil";

export const patientFields: FilterKey[] = [
  ...personFields,
  ...admingenerateAuditFields("Receptionist"),
];
