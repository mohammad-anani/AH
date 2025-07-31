// OperationFields.ts

import type { FilterKey } from "@/utils/models/types/utils/Form&Filter";
import {
  stringField,
  selectorField,
  datetimeField,
  generateAuditFields,
} from "./reusableFields";
import { DepartmentSelectCallBack } from "@/features/department/departmentSelectCallback";

export const operationFields: FilterKey[] = [
  stringField("Name"),
  stringField("Description"),
  selectorField("PatientID", "Patient"),
  ["Department", "custom", DepartmentSelectCallBack],
  datetimeField("Scheduled Date"),
  ["Status", "uniselect", ["Done", "UnDone"]],
  ...generateAuditFields("Receptionist"),
];
