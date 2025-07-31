// DepartmentFields.ts

import type { FilterKey } from "@/utils/models/types/utils/Form&Filter";
import { stringField, phoneField, generateAuditFields } from "./reusableFields";

export const departmentFields: FilterKey[] = [
  stringField("Name"),
  phoneField("Phone"),
  ...generateAuditFields("Admin"),
];
