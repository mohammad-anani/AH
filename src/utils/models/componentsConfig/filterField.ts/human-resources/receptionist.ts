// ReceptionistFields.ts

import type { FilterKey } from "@/utils/models/types/utils/Form&Filter";
import { personFields } from "./person";
import { employeeFields } from "./employee";
import { admingenerateAuditFields } from "../adminRoleUtil";

export const receptionistFields: FilterKey[] = [
  ...personFields,
  ...employeeFields,
  ...admingenerateAuditFields("Admin"),
];
