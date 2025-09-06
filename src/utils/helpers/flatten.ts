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
        recurse(value as Record<string, unknown>); // just go deeper, no prefix
      } else {
        result[key] = value; // use the key directly
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

      // Exclude fields starting with "createdby" or "createdat" (case-insensitive)
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

        // Check if this nested object has an ID property
        if ("ID" in nestedObj && typeof nestedObj.ID === "number") {
          // Convert nested object with ID to {key}ID format
          const idKey = `${key}ID`;
          // Only add if this ID field would exist in the update type
          result[idKey] = nestedObj.ID;
        } else {
          // Continue flattening nested objects that don't have ID
          smartFlatten(nestedObj);
        }
      } else {
        // Only add primitive values that would exist in the update type
        result[key] = value;
      }
    }
  }

  smartFlatten(obj as Record<string, unknown>);

  // Filter result to only include keys that exist in the update type
  // This removes fields like CreatedAt, UpdatedAt, etc. that aren't in update schemas
  return result as updateTypesObject[T & keyof updateTypesObject];
}
