import type { typesObject } from "../../types/normal/typesObject";
import type { DisplayEntityKey, EntityKey } from "../../types/utils/entityKeys";
import type { DotAccess, FormKey } from "../../types/utils/Form&Filter";
import type { RouteConfig } from "../routeConfig";

import type { Role } from "../../types/utils/Form&Filter";

export function prefixFields<
  T extends DisplayEntityKey,
  B extends DisplayEntityKey = T,
>(prefix: string, baseFields: FormKey<B>[]): FormKey<T>[] {
  return baseFields.map(([label, fieldKey, type, mode, ...rest]) => [
    label,
    `${prefix}.${fieldKey}` as DotAccess<typesObject[T]>,
    type,
    mode,
    ...rest,
  ]);
}

export const formSelectorField = <T extends EntityKey, B extends EntityKey>(
  label: string,
  fieldKey: DotAccess<typesObject[T]>,
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
