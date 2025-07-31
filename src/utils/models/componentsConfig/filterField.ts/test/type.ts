// TestTypeFields.ts

import type { FilterKey } from "@/utils/models/types/utils/Form&Filter";
import {
  stringField,
  numberField,
  generateAuditFields,
  selectorField,
} from "../reusableFields";
import { DepartmentSelectCallBack } from "@/features/department/departmentSelectCallback";

export const testTypeFields: FilterKey[] = [
  ["Department", "custom", DepartmentSelectCallBack],
  stringField("Name"),
  numberField("Cost"),
  selectorField("AdminID", "Admin"),
  ...generateAuditFields("Admin"),
];
