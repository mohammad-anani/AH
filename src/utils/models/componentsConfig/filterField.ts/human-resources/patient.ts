// PatientFields.ts

import type { FilterKey } from "@/utils/models/types/utils/Form&Filter";
import { personFields } from "./person";
import { generateAuditFields } from "../reusableFields";

export const patientFields: FilterKey[] = [
  ...personFields,
  ...generateAuditFields("Receptionist"),
];
