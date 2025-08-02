import type { SelectorConfig } from "@/utils/models/types/utils/selectorTypes";
import type { typesObject } from "../../../types/normal/typesObject";
import type {
  DisplayEntityKey,
  EntityKey,
} from "../../../types/utils/entityKeys";
import type {
  DotAccess,
  FilterKey,
  FormKey,
} from "../../../types/utils/Form&Filter";
import type { RowTemplate } from "../../routeConfig";
import type { DataFields } from "@/utils/models/types/utils/routeTypes";
import type { Role } from "./reusableFields";

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

export const selectorField = <T extends EntityKey, B extends EntityKey>(
  label: string,
  fieldKey: DotAccess<typesObject[B]>,
  entity: T,
  mode: "add" | "both",
  filterFields: FilterKey[],
  selectorConfig: SelectorConfig<EntityKey>,
  rowTemplate: RowTemplate<EntityKey>,
  dataFields: DataFields<EntityKey>,
  role: Role,
): FormKey<EntityKey> => [
  label,
  fieldKey,
  "selector",
  mode,
  [entity, selectorConfig, rowTemplate, dataFields, filterFields, role],
];
