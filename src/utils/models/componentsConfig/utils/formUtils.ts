import type { EntityKey } from "../../types/utils/entityKeys";
import type { DotAccess, FormKey } from "../../types/utils/Form&Filter";
import type { RouteConfig } from "../routeConfig";

import type { addTypesObject } from "../../types/add";
import type { Role } from "../../types/utils/Form&Filter";

export const formSelectorField = <T extends EntityKey, B extends EntityKey>(
  label: string,
  fieldKey: DotAccess<addTypesObject[T]>,
  entity: B,
  mode: "add" | "update" | "both",
  entityObject: RouteConfig<B>,
  role: Role,
): FormKey<T> => [
    label,
    fieldKey,
    "selector",
    mode,
    [entity, entityObject, role],
  ];
