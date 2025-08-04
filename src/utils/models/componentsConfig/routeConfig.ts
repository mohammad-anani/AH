import type { Primitive } from "react-hook-form";
import type { rowTypesObject } from "../types/row/rowTypesObject";
import {
  type DisplayEntityKey,
  type EntityKey,
  entityKeys,
} from "../types/utils/entityKeys";
import type { FilterKey, FormKey } from "../types/utils/Form&Filter";
import type { DataFields, SubLinks } from "../types/utils/routeTypes";
import { dataFields } from "./admin/dataFields";
import { filterFields } from "./admin/filterFields";
import { formConfig } from "./admin/formConfig";
import { rowTemplates } from "./admin/rowTemplates";
import { subLinks } from "./admin/subLinks";
import type { SelectorConfig } from "../types/utils/selectorTypes";

import { filterFields as receptionistFilterFields } from "./receptionist/filterFields.ts";
import { rowTemplates as receptionistRowTemplates } from "./receptionist/rowTemplates.ts";
import { dataFields as receptionistDataFields } from "./receptionist/dataFields.ts";
import { formConfig as receptionistFormConfig } from "./receptionist//formConfig";
import { subLinks as receptionistSubLinks } from "./receptionist/subLinks";

export type RouteConfigType<K extends EntityKey> = {
  rowTemplate: RowTemplate<K>;
  dataFields: DataFields<K>;
  filterFields: FilterKey[];
  formConfig: FormKey<K>[];
  subLinks?: SubLinks<K>;
};

export const adminRouteConfigs = Object.fromEntries(
  entityKeys.map((key) => [
    key,
    {
      rowTemplate: rowTemplates[key],
      dataFields: dataFields[key],
      filterFields: filterFields[key],
      formConfig: formConfig[key],
      subLinks: subLinks[key],
    },
  ]),
) as { [K in EntityKey]: RouteConfigType<K> };

export const receptionistRouteConfigs = Object.fromEntries(
  entityKeys.map((key) => [
    key,
    {
      rowTemplate: receptionistRowTemplates[key],
      dataFields: receptionistDataFields[key],
      filterFields: receptionistFilterFields[key],
      formConfig: receptionistFormConfig[key],
      subLinks: receptionistSubLinks[key],
    },
  ]),
) as { [K in EntityKey]: RouteConfigType<K> };

export type RowTemplate<T extends EntityKey> = [
  string[],
  (item: rowTypesObject[T]) => Primitive[],
  number[],
];
export type Config<T extends EntityKey> = {
  dataFields: DataFields<T>;
  filterFields: FilterKey[];
  formConfig: FormKey<T>[];
  rowTemplate: RowTemplate<T>;
  selectorConfig: SelectorConfig<T>;
  subLinks: SubLinks<T>;
};

export type DisplayingConfig<T extends DisplayEntityKey> = {
  dataFields: DataFields<T>;
  filterFields: FilterKey[];
  formConfig: FormKey<T>[];

  selectorConfig: SelectorConfig<T>;
};
