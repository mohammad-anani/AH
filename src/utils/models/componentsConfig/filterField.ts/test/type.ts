// TestTypeFields.ts

import type { FilterKey } from "@/utils/models/types/utils/Form&Filter";
import { stringField, numberField } from "../reusableFields";
import { DepartmentSelectCallBack } from "@/features/department/departmentSelectCallback";
import { admingenerateAuditFields } from "../adminRoleUtil";

export const testTypeFields: FilterKey[] = [
  ["Department", "custom", DepartmentSelectCallBack],
  stringField("Name"),
  numberField("Cost"),
  ...admingenerateAuditFields("Admin"),
];
