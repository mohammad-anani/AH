// AdminFields.ts

import type { FilterKey } from "@/utils/models/types/utils/Form&Filter";
import { personFields } from "./person";
import { employeeFields } from "./employee";
import { admingenerateAuditFields } from "../adminRoleUtil";

export const adminFields: FilterKey[] = [
  ...personFields,
  ...employeeFields,
  ...admingenerateAuditFields("Admin"),
];
