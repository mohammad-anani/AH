import type { FilterKey, Role } from "@/utils/models/types/utils/Form&Filter";
import type { EntityKey } from "../../types/utils/entityKeys";
import type {
  DataFields as DataFields,
  RowTemplate,
} from "../../types/utils/routeTypes";
import type { SelectorConfig } from "../../types/utils/selectorTypes";
import type { RouteConfig } from "../routeConfig";

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

export const filterSelectorField = <T extends EntityKey>(
  fieldKey: string,
  entity: T,
  entityObject: RouteConfig<T>,
  role: Role,
): FilterKey => [
  fieldKey,
  "selector",
  [
    entity,
    entityObject["selectorConfig"] as SelectorConfig<EntityKey>,
    entityObject["rowTemplate"] as RowTemplate<EntityKey>,
    entityObject["dataFields"] as DataFields<EntityKey>,
    entityObject["filterFields"],
    role,
  ],
];

export const generateAuditFields = <T extends Role>(
  creator: T,
  entityObject: RouteConfig<T>,
  role: Role,
): FilterKey[] => [
  datetimeField("CreatedAt"),
  filterSelectorField(`${creator}ID`, creator, entityObject, role),
];
