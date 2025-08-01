// InsuranceFields.ts

import type { FilterKey } from "@/utils/models/types/utils/Form&Filter";
import {
  stringField,
  numberField,
  booleanField,
  dateField,
  generateAuditFields,
} from "./reusableFields";
import type { EntityKey } from "../../types/utils/entityKeys";
import type { DataFields } from "../../types/utils/routeTypes";
import type { SelectorConfig } from "../../types/utils/selectorTypes";
import { dataFields } from "../dataFields/dataFields";
import type { RowTemplate } from "../routeConfig";
import { rowTemplates } from "../rowTemplate/rowTemplates";
import { selectorConfig } from "../selectorConfig/selectorConfig";

import { receptionistFields } from "./human-resources";

export const insuranceFields: FilterKey[] = [
  stringField("ProviderName"),
  numberField("Coverage"),
  booleanField("isActive", ["Active", "Inactive"]),
  dateField("ExpirationDate"),
  ...generateAuditFields(
    "Receptionist",
    receptionistFields,
    selectorConfig["Receptionist"] as SelectorConfig<EntityKey>,
    rowTemplates["Receptionist"] as RowTemplate<EntityKey>,
    dataFields["Receptionist"] as DataFields<EntityKey>,
  ),
];
