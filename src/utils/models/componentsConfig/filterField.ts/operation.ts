// OperationFields.ts

import type { FilterKey } from "@/utils/models/types/utils/Form&Filter";
import {
  stringField,
  datetimeField,
  generateAuditFields,
} from "./reusableFields";
import { selectorField } from "./reusableFields";
import { DepartmentSelectCallBack } from "@/features/department/departmentSelectCallback";
import type { EntityKey } from "../../types/utils/entityKeys";
import type { DataFields } from "../../types/utils/routeTypes";
import type { SelectorConfig } from "../../types/utils/selectorTypes";
import { dataFields } from "../dataFields/dataFields";
import type { RowTemplate } from "../routeConfig";
import { rowTemplates } from "../rowTemplate/rowTemplates";
import { selectorConfig } from "../selectorConfig/selectorConfig";
import { patientFields, receptionistFields } from "./human-resources";

export const operationFields: FilterKey[] = [
  stringField("Name"),
  stringField("Description"),
  selectorField(
    "PatientID",
    "Patient",
    patientFields,
    selectorConfig["Patient"] as SelectorConfig<EntityKey>,
    rowTemplates["Patient"] as RowTemplate<EntityKey>,
    dataFields["Patient"] as DataFields<EntityKey>,
  ),
  ["Department", "custom", DepartmentSelectCallBack],
  datetimeField("Scheduled Date"),
  ["Status", "uniselect", ["Done", "UnDone"]],
  ...generateAuditFields(
    "Receptionist",
    receptionistFields,
    selectorConfig["Receptionist"] as SelectorConfig<EntityKey>,
    rowTemplates["Receptionist"] as RowTemplate<EntityKey>,
    dataFields["Receptionist"] as DataFields<EntityKey>,
  ),
];
