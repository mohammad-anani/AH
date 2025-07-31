import { filterFields } from "./filterFields";
import { rowTemplates } from "./rowTemplates";
import { dataFields } from "./dataFields";
import { formConfig } from "./formConfig";
import { subLinks } from "./subLinks";
import {
  entityKeys,
  type dataFields as DataFields,
  type EntityKey,
  type FormKey,
  type Key,
  type RowTemplate,
  type SubLinks,
} from "../types/util";

export type RouteConfigType<K extends EntityKey> = {
  rowTemplate: RowTemplate<K>;
  dataFields: DataFields<K>;
  filterFields: Key[];
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
