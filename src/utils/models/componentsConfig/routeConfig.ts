import { filterFields } from "./filterField.ts/filterFields";
import { rowTemplates } from "./rowTemplate/rowTemplates";

import { type FormKey, type FilterKey } from "../types/utils/Form&Filter";
import { type dataFields as DataFields } from "../types/utils/routeTypes";
import { type SubLinks } from "../types/utils/routeTypes";
import { entityKeys, type EntityKey } from "../types/utils/entityKeys";
import type { Primitive } from "zod";
import type { rowTypesObject } from "../types/row/rowTypesObject";
import { dataFields } from "./dataFields/dataFields";
import { formConfig } from "./formConfig/formConfig";
import { subLinks } from "./subLinks/subLinks";

export type RouteConfigType<K extends EntityKey> = {
  rowTemplate: RowTemplate<K>;
  dataFields: DataFields<K>;
  filterFields: FilterKey[];
  formConfig: FormKey<K>[];
  subLinks: SubLinks<K>;
};

export const routeConfigs = Object.fromEntries(
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
export type RowTemplate<T extends EntityKey> = [
  string[],
  (item: rowTypesObject[T]) => Primitive[],
  number[],
];
