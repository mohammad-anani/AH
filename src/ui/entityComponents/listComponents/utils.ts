import type { rowTypesObject } from "@/utils/models/types/row/rowTypesObject";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";

export function convertStringToType(type: string, value: string) {
  if (value === "" && type !== "boolean") return type === "string" ? "" : null;

  switch (type) {
    case "number":
      return Number(value);
    case "string":
    case "phone":
      return value;
    case "boolean":
      return value !== "" ? value : "all";
    case "array":
      if (value) return value.split(",");
      break;
    default:
      return null;
  }
}

export function isTemporalType(type: string) {
  return ["date", "datetime", "time"].includes(type);
}

export function generateLabel(key: string) {
  return key
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/_/g, " ")
    .replace(/^./, (str) => str.toUpperCase());
}

export function getTemporalValue(key: string, filter: Record<string, unknown>) {
  return {
    from: (filter[key + "From"] as string) || "",
    to: (filter[key + "To"] as string) || "",
  };
}

export function isOnlyIdFilled(obj: rowTypesObject[EntityKey]): boolean {
  const keys = Object.keys(obj);
  return keys.length === 1 && keys[0] === "ID" && obj["ID"] !== undefined;
}
