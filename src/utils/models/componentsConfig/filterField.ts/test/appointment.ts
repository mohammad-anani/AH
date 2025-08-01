// TestAppointmentFields.ts

import type { FilterKey } from "@/utils/models/types/utils/Form&Filter";
import {
  datetimeField,
  uniselectField,
  stringField,
  generateAuditFields,
} from "../reusableFields";
import { selectorField } from "../reusableFields";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import type { DataFields } from "@/utils/models/types/utils/routeTypes";
import type { SelectorConfig } from "@/utils/models/types/utils/selectorTypes";
import { dataFields } from "../../dataFields/dataFields";
import type { RowTemplate } from "../../routeConfig";
import { rowTemplates } from "../../rowTemplate/rowTemplates";
import { selectorConfig } from "../../selectorConfig/selectorConfig";
import { testOrderFields } from "./order";
import { patientFields, receptionistFields } from "../human-resources";

export const testAppointmentFields: FilterKey[] = [
  selectorField(
    "TestOrderID",
    "TestOrder",
    testOrderFields,
    selectorConfig["TestOrder"] as SelectorConfig<EntityKey>,
    rowTemplates["TestOrder"] as RowTemplate<EntityKey>,
    dataFields["TestOrder"] as DataFields<EntityKey>,
  ),
  selectorField(
    "PatientID",
    "Patient",
    patientFields,
    selectorConfig["Patient"] as SelectorConfig<EntityKey>,
    rowTemplates["Patient"] as RowTemplate<EntityKey>,
    dataFields["Patient"] as DataFields<EntityKey>,
  ),
  datetimeField("ScheduledDate"),
  uniselectField("Status", ["Cancelled", "Accepted"]),
  stringField("Result"),
  datetimeField("ResultDate"),
  ...generateAuditFields(
    "Receptionist",
    receptionistFields,
    selectorConfig["Receptionist"] as SelectorConfig<EntityKey>,
    rowTemplates["Receptionist"] as RowTemplate<EntityKey>,
    dataFields["Receptionist"] as DataFields<EntityKey>,
  ),
];
