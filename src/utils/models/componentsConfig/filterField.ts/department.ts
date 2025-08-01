// DepartmentFields.ts

import type { FilterKey } from "@/utils/models/types/utils/Form&Filter";
import { stringField, phoneField, generateAuditFields } from "./reusableFields";
import type { EntityKey } from "../../types/utils/entityKeys";
import type { SelectorConfig } from "../../types/utils/selectorTypes";
import { dataFields } from "../dataFields/dataFields";
import type { RowTemplate } from "../routeConfig";
import { rowTemplates } from "../rowTemplate/rowTemplates";
import { selectorConfig } from "../selectorConfig/selectorConfig";

import type { DataFields } from "../../types/utils/routeTypes";
import { receptionistFields } from "./human-resources";

export const departmentFields: FilterKey[] = [
  stringField("Name"),
  phoneField("Phone"),
  ...generateAuditFields(
    "Admin",
    receptionistFields,
    selectorConfig["Receptionist"] as SelectorConfig<EntityKey>,
    rowTemplates["Receptionist"] as RowTemplate<EntityKey>,
    dataFields["Receptionist"] as DataFields<EntityKey>,
  ),
];
