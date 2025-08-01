// DepartmentFields.ts

import type { FilterKey } from "@/utils/models/types/utils/Form&Filter";
import { stringField, phoneField } from "./reusableFields";
import { admingenerateAuditFields } from "./adminRoleUtil";

export const departmentFields: FilterKey[] = [
  stringField("Name"),
  phoneField("Phone"),
  ...admingenerateAuditFields("Admin"),
];
