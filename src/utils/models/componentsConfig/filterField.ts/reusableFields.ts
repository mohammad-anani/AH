// reusableFields.ts

import type { FilterKey } from "@/utils/models/types/utils/Form&Filter";

import type { EntityKey } from "../../types/utils/entityKeys";
import { filterFields } from "../filterFields";
import { rowTemplates } from "../rowTemplate/rowTemplates";
import { selectorConfig } from "../selectorConfig";
import type { SelectorConfig } from "../../types/utils/selectorTypes";
import type { RowTemplate } from "../routeConfig";
import type { dataFields as DataFields } from "../../types/utils/routeTypes";
import { dataFields } from "../dataFields/dataFields";

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

// Lazy selectorField builder
export const selectorField = (
  fieldKey: string,
  entity: EntityKey,
): FilterKey => [
  fieldKey,
  "selector",
  [
    entity,
    selectorConfig[entity] as SelectorConfig<EntityKey>,
    rowTemplates[entity] as RowTemplate<EntityKey>,
    dataFields[entity] as DataFields<EntityKey>,
    (() => filterFields[entity])(),
  ],
];

export type CreatorRole = "Admin" | "Receptionist" | "Doctor";

export const generateAuditFields = (creator: CreatorRole): FilterKey[] => [
  datetimeField("CreatedAt"),
  selectorField(`${creator}ID`, creator),
];
