import type { typesObject } from "../../types/normal/typesObject";
import type { DisplayEntityKey } from "../../types/utils/entityKeys";
import type { DotAccess, FormKey } from "../../types/utils/Form&Filter";

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
