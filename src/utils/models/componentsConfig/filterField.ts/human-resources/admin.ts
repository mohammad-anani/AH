// AdminFields.ts

import type { FilterKey } from "@/utils/models/types/utils/Form&Filter";
import { personFields } from "./person";
import { employeeFields } from "./employee";
import { generateAuditFields } from "../reusableFields";

import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import type { DataFields } from "@/utils/models/types/utils/routeTypes";
import type { SelectorConfig } from "@/utils/models/types/utils/selectorTypes";
import { dataFields } from "../../dataFields/dataFields";
import type { RowTemplate } from "../../routeConfig";
import { rowTemplates } from "../../rowTemplate/rowTemplates";
import { selectorConfig } from "../../selectorConfig/selectorConfig";

export const adminFields: FilterKey[] = [
  ...personFields,
  ...employeeFields,
  ...generateAuditFields(
    "Admin",
    [...personFields, ...employeeFields, ["CreatedAt", "datetime"]],
    selectorConfig["Admin"] as SelectorConfig<EntityKey>,
    rowTemplates["Admin"] as RowTemplate<EntityKey>,
    dataFields["Admin"] as DataFields<EntityKey>,
  ),
];
