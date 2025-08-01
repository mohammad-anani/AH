// PatientFields.ts

import type { FilterKey } from "@/utils/models/types/utils/Form&Filter";
import { personFields } from "./person";
import { generateAuditFields } from "../reusableFields";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import type { DataFields } from "@/utils/models/types/utils/routeTypes";
import type { SelectorConfig } from "@/utils/models/types/utils/selectorTypes";
import { dataFields } from "../../dataFields/dataFields";
import type { RowTemplate } from "../../routeConfig";
import { rowTemplates } from "../../rowTemplate/rowTemplates";
import { selectorConfig } from "../../selectorConfig/selectorConfig";
import { receptionistFields } from "./receptionist";

export const patientFields: FilterKey[] = [
  ...personFields,
  ...generateAuditFields(
    "Receptionist",
    receptionistFields,
    selectorConfig["Receptionist"] as SelectorConfig<EntityKey>,
    rowTemplates["Receptionist"] as RowTemplate<EntityKey>,
    dataFields["Receptionist"] as DataFields<EntityKey>,
  ),
];
