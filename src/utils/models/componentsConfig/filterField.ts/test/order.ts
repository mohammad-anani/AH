// TestOrderFields.ts

import type { FilterKey } from "@/utils/models/types/utils/Form&Filter";
import { datetimeField } from "../reusableFields";
import { selectorField } from "../reusableFields";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import type { DataFields } from "@/utils/models/types/utils/routeTypes";
import type { SelectorConfig } from "@/utils/models/types/utils/selectorTypes";
import { dataFields } from "../../dataFields/dataFields";
import type { RowTemplate } from "../../routeConfig";
import { rowTemplates } from "../../rowTemplate/rowTemplates";
import { selectorConfig } from "../../selectorConfig/selectorConfig";
import { testTypeFields } from "./type";
import { appointmentFields } from "../appointment";

export const testOrderFields: FilterKey[] = [
  selectorField(
    "AppointmentID",
    "Appointment",
    appointmentFields,
    selectorConfig["Appointment"] as SelectorConfig<EntityKey>,
    rowTemplates["Appointment"] as RowTemplate<EntityKey>,
    dataFields["Appointment"] as DataFields<EntityKey>,
  ),
  selectorField(
    "TestTypeID",
    "TestType",
    testTypeFields,
    selectorConfig["TestType"] as SelectorConfig<EntityKey>,
    rowTemplates["TestType"] as RowTemplate<EntityKey>,
    dataFields["TestType"] as DataFields<EntityKey>,
  ),
  datetimeField("OrderAt"),
];
