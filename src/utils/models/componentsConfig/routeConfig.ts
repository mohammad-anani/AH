import {
  type DisplayEntityKey,
  type EntityKey,
} from "../types/utils/entityKeys";
import type { FilterKey, FormKey } from "../types/utils/Form&Filter";
import type {
  DataFields,
  RowTemplate,
  SubLinks,
} from "../types/utils/routeTypes";

import type { SelectorConfig } from "../types/utils/selectorTypes";

export type RouteConfig<T extends EntityKey> = {
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
};
