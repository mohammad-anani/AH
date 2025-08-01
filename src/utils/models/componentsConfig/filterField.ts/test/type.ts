// TestTypeFields.ts

import type { FilterKey } from "@/utils/models/types/utils/Form&Filter";
import {
  stringField,
  numberField,
  generateAuditFields,
} from "../reusableFields";
import { DepartmentSelectCallBack } from "@/features/department/departmentSelectCallback";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import type { DataFields } from "@/utils/models/types/utils/routeTypes";
import type { SelectorConfig } from "@/utils/models/types/utils/selectorTypes";
import { dataFields } from "../../dataFields/dataFields";
import type { RowTemplate } from "../../routeConfig";
import { rowTemplates } from "../../rowTemplate/rowTemplates";
import { selectorConfig } from "../../selectorConfig/selectorConfig";
import { adminFields } from "../human-resources";

export const testTypeFields: FilterKey[] = [
  ["Department", "custom", DepartmentSelectCallBack],
  stringField("Name"),
  numberField("Cost"),
  ...generateAuditFields(
    "Admin",
    adminFields,
    selectorConfig["Admin"] as SelectorConfig<EntityKey>,
    rowTemplates["Admin"] as RowTemplate<EntityKey>,
    dataFields["Admin"] as DataFields<EntityKey>,
  ),
];
