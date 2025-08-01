// reusableFields.ts

import type { FilterKey } from "@/utils/models/types/utils/Form&Filter";

import type { EntityKey } from "../../types/utils/entityKeys";
import type { DataFields as DataFields } from "../../types/utils/routeTypes";
import type { SelectorConfig } from "../../types/utils/selectorTypes";
import type { RowTemplate } from "../routeConfig";

// Field Builders
export const stringField = (label: string): FilterKey => [label, "string"];
export const numberField = (label: string): FilterKey => [label, "number"];
export const phoneField = (label: string): FilterKey => [label, "phone"];
export const emailField = (label: string): FilterKey => [label, "email"];
export const dateField = (label: string): FilterKey => [label, "date"];
export const datetimeField = (label: string): FilterKey => [label, "datetime"];
export const timeField = (label: string): FilterKey => [label, "time"];
export const moneyField = (label: string): FilterKey => [label, "money"];
export const booleanField = (
  label: string,
  labels: [string, string, string?],
): FilterKey => [label, "boolean", labels];

export const uniselectField = (label: string, values: string[]): FilterKey => [
  label,
  "uniselect",
  values,
];
export const multiselectField = (
  label: string,
  values: string[],
): FilterKey => [label, "multiselect", values];

export type Role = "Admin" | "Receptionist" | "Doctor";

export const generateAuditFields = (
  creator: Role,
  filterFields: FilterKey[],
  selectorConfig: SelectorConfig<EntityKey>,
  rowTemplate: RowTemplate<EntityKey>,
  dataFields: DataFields<EntityKey>,
  role: Role,
): FilterKey[] => [
  datetimeField("CreatedAt"),
  selectorField(
    `${creator}ID`,
    creator,
    filterFields,
    selectorConfig,
    rowTemplate,
    dataFields,
    role,
  ),
]; // ✅ Use cached object in selectorField()

export const selectorField = (
  fieldKey: string,
  entity: EntityKey,
  filterFields: FilterKey[],
  selectorConfig: SelectorConfig<EntityKey>,
  rowTemplate: RowTemplate<EntityKey>,
  dataFields: DataFields<EntityKey>,
  role: Role,
): FilterKey => [
  fieldKey,
  "selector",
  [entity, selectorConfig, rowTemplate, dataFields, filterFields, role],
];
