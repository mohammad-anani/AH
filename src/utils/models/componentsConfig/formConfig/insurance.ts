import type { EntityKey } from "../../types/utils/entityKeys";
import type { FormKey } from "../../types/utils/Form&Filter";
import type { DataFields as DataFields } from "../../types/utils/routeTypes";
import type { SelectorConfig } from "../../types/utils/selectorTypes";
import { dataFields } from "../dataFields/dataFields";
import { filterFields } from "../filterField.ts/filterFields";

import type { RowTemplate } from "../routeConfig";
import { rowTemplates } from "../rowTemplate/rowTemplates";
import { selectorConfig } from "../selectorConfig/selectorConfig";
import { statusLabels } from "./human-resources/employee";

export const insuranceForm: FormKey<"Insurance">[] = [
  [
    "Patient",
    "PatientID",
    "selector",
    "add",
    [
      "Patient",
      selectorConfig["Patient"] as SelectorConfig<EntityKey>,
      rowTemplates["Patient"] as RowTemplate<EntityKey>,
      dataFields["Patient"] as DataFields<EntityKey>,
      filterFields["Patient"],
      "Admin",
    ],
  ],
  ["Provider Name", "ProviderName", "string", "both"],
  ["Coverage", "Coverage", "number", "both"],
  ["Expiration Date", "ExpirationDate", "date", "both"],
  ["Status", "isActive", "boolean", "update", statusLabels],
];
