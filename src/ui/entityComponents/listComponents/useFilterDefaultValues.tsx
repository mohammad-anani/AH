import { useSearchParams } from "react-router-dom";
import { convertStringToType, isTemporalType } from "./utils";
import type {
  customFilterProps,
  DataTypes,
  Key,
} from "@/utils/models/types/util";
import type { Primitive } from "zod";
type ReduceObjectType = {
  [key: string]: Primitive | string[];
};

export function useFilterDefaultValues(fields: Key[]) {
  const [params] = useSearchParams();
  const defaults: ReduceObjectType = {};

  for (const [field, type, data] of fields) {
    if (type === "custom") {
      const [, customType] = data as customFilterProps;

      defaults[field] =
        convertStringToType(customType ?? "", params.get(field) ?? "") || null;
    } else if (isTemporalType(type ?? "null")) {
      defaults[field + "From"] = (params.get(field + "From") ??
        null) as DataTypes;
      defaults[field + "To"] = (params.get(field + "To") ?? null) as DataTypes;
    } else {
      const value = params.get(field) ?? "";
      defaults[field] = convertStringToType(type ?? "", value) as DataTypes;
    }
  }

  defaults.sort = params.get("sort") ?? "None";
  defaults.order = params.get("order") ?? "asc";

  return defaults;
}
