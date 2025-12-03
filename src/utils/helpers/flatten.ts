import type { typesObject } from "@/utils/models/types/normal/typesObject";
import type { updateTypesObject } from "@/utils/models/types/update/updateTypesObject";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";

export default function flatten<T extends Record<string, unknown>>(
  obj: T,
): Record<string, unknown> {
  const result: Record<string, unknown> = {};

  function recurse(current: Record<string, unknown>) {
    for (const key in current) {
      if (!Object.prototype.hasOwnProperty.call(current, key)) continue;

      const value = current[key];
      if (
        value !== null &&
        typeof value === "object" &&
        !Array.isArray(value)
      ) {
        recurse(value as Record<string, unknown>);
      } else {
        result[key] = value;
      }
    }
  }

  recurse(obj);
  return result;
}

export function convertToUpdateObject<T extends EntityKey>(
  obj: typesObject[T],
): updateTypesObject[T & keyof updateTypesObject] {
  const result: Record<string, unknown> = {};

  function smartFlatten(current: Record<string, unknown>) {
    for (const key in current) {
      if (!Object.prototype.hasOwnProperty.call(current, key)) continue;


      const lowerKey = key.toLowerCase();
      if (
        lowerKey.startsWith("createdby") ||
        lowerKey.startsWith("createdat")
      ) {
        continue;
      }

      const value = current[key];

      if (
        value !== null &&
        typeof value === "object" &&
        !Array.isArray(value)
      ) {
        const nestedObj = value as Record<string, unknown>;

        if ("ID" in nestedObj && typeof nestedObj.ID === "number") {
          const idKey = `${key}ID`;
          result[idKey] = nestedObj.ID;
        } else {
          smartFlatten(nestedObj);
        }
      } else {
        result[key] = value;
      }
    }
  }

  smartFlatten(obj as Record<string, unknown>);

  return result as updateTypesObject[T & keyof updateTypesObject];
}
