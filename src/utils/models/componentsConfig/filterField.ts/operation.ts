// OperationFields.ts

import type { FilterKey } from "@/utils/models/types/utils/Form&Filter";
import { stringField, datetimeField } from "./reusableFields";
import { DepartmentSelectCallBack } from "@/features/department/departmentSelectCallback";
import { patientFields } from "./human-resources";
import { admingenerateAuditFields, adminSelectorField } from "./adminRoleUtil";

export const operationFields: FilterKey[] = [
  stringField("Name"),
  stringField("Description"),
  adminSelectorField("PatientID", "Patient", patientFields),
  ["Department", "custom", DepartmentSelectCallBack],
  datetimeField("Scheduled Date"),
  ["Status", "uniselect", ["Done", "UnDone"]],
  ...admingenerateAuditFields("Receptionist"),
];
