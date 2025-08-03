import { useSearchParams } from "react-router-dom";
import { convertStringToType, isTemporalType } from "../listComponents/utils";
import type {
  customFilterProps,
  DataTypes,
  FilterKey,
} from "@/utils/models/types/utils/Form&Filter";
import type { SearchParamsState } from "@/utils/models/types/utils/selectorTypes";
import type { Primitive } from "react-hook-form";
type ReduceObjectType = {
  [key: string]: Primitive | string[];
};

export function useFilterDefaultValues(
  fields: FilterKey[],
  searchParamsState?: SearchParamsState,
) {
  const [urlparams] = useSearchParams();

  const params = searchParamsState ? searchParamsState[0] : urlparams;

  if (!params) return null;

  const defaults: ReduceObjectType = {};

  for (const [field, type, data] of fields) {
    if (type === "custom") {
      const [, customType] = data as customFilterProps;

      defaults[field] =
        convertStringToType(customType ?? "", params.get(field) ?? "") || null;
    } else if (isTemporalType(type ?? "null") || type === "money") {
      defaults[field + "From"] = (params.get(field + "From") ??
        null) as DataTypes;
      defaults[field + "To"] = (params.get(field + "To") ?? null) as DataTypes;
    } else if (type === "selector") {
      defaults[field] =
        convertStringToType("number", params.get(field) ?? "") || null;
    } else {
      const value = params.get(field) ?? "";
      defaults[field] = convertStringToType(type ?? "", value) as DataTypes;
    }
  }

  defaults.sort = params.get("sort") ?? "None";
  defaults.order = params.get("order") ?? "asc";

  return defaults;
}
