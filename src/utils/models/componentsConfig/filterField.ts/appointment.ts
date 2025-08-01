// AppointmentFields.ts

import type { FilterKey } from "@/utils/models/types/utils/Form&Filter";
import { datetimeField, stringField, uniselectField } from "./reusableFields";
import { selectorField } from "./reusableFields";
import { selectorConfig } from "../selectorConfig/selectorConfig";
import { rowTemplates } from "../rowTemplate/rowTemplates";
import { dataFields } from "../dataFields/dataFields";
import type { SelectorConfig } from "../../types/utils/selectorTypes";
import type { EntityKey } from "../../types/utils/entityKeys";
import type { RowTemplate } from "../routeConfig";
import type { DataFields as DataFields } from "../../types/utils/routeTypes";
import { doctorFields } from "./human-resources";
import { admingenerateAuditFields, adminSelectorField } from "./adminRoleUtil";

export const appointmentFields: FilterKey[] = [
  adminSelectorField("DoctorID", "Doctor", doctorFields),
  selectorField(
    "PatientID",
    "Patient",
    doctorFields,
    selectorConfig["Patient"] as SelectorConfig<EntityKey>,
    rowTemplates["Patient"] as RowTemplate<EntityKey>,
    dataFields["Patient"] as DataFields<EntityKey>,
    "Admin",
  ),
  datetimeField("Time"),
  stringField("Reason"),
  uniselectField("Status", ["Accepted", "Rejected"]),
  stringField("Notes"),
  ...admingenerateAuditFields("Receptionist"),
];
