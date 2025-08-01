// AppointmentFields.ts

import type { FilterKey } from "@/utils/models/types/utils/Form&Filter";
import {
  datetimeField,
  stringField,
  uniselectField,
  generateAuditFields,
} from "./reusableFields";
import { selectorField } from "./reusableFields";
import { selectorConfig } from "../selectorConfig/selectorConfig";
import { rowTemplates } from "../rowTemplate/rowTemplates";
import { dataFields } from "../dataFields/dataFields";
import type { SelectorConfig } from "../../types/utils/selectorTypes";
import type { EntityKey } from "../../types/utils/entityKeys";
import type { RowTemplate } from "../routeConfig";
import type { DataFields as DataFields } from "../../types/utils/routeTypes";
import { doctorFields, receptionistFields } from "./human-resources";

export const appointmentFields: FilterKey[] = [
  selectorField(
    "DoctorID",
    "Doctor",
    doctorFields,
    selectorConfig["Doctor"] as SelectorConfig<EntityKey>,
    rowTemplates["Doctor"] as RowTemplate<EntityKey>,
    dataFields["Doctor"] as DataFields<EntityKey>,
  ),
  selectorField(
    "PatientID",
    "Patient",
    doctorFields,
    selectorConfig["Patient"] as SelectorConfig<EntityKey>,
    rowTemplates["Patient"] as RowTemplate<EntityKey>,
    dataFields["Patient"] as DataFields<EntityKey>,
  ),
  datetimeField("Time"),
  stringField("Reason"),
  uniselectField("Status", ["Accepted", "Rejected"]),
  stringField("Notes"),
  ...generateAuditFields(
    "Receptionist",
    receptionistFields,
    selectorConfig["Receptionist"] as SelectorConfig<EntityKey>,
    rowTemplates["Receptionist"] as RowTemplate<EntityKey>,
    dataFields["Receptionist"] as DataFields<EntityKey>,
  ),
];
