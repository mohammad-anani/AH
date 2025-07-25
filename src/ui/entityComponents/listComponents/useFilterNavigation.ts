import { useSearchParams } from "react-router-dom";
import { isTemporalType } from "./utils";
import type { Key, Setter } from "@/utils/models/types/util";

export function useFilterNavigation(
  fields: Key[],
  searchParamsState?: [URLSearchParams, Setter<URLSearchParams>],
) {
  const [searchParams, setSearchParams] = useSearchParams();

  function buildPathWithParams(data: Record<string, unknown>): URLSearchParams {
    const params = new URLSearchParams();

    for (const [field, type] of fields) {
      if (isTemporalType(type ?? "null") || type === "number") {
        if (data[field + "From"])
          params.set(field + "From", String(data[field + "From"]));
        if (data[field + "To"])
          params.set(field + "To", String(data[field + "To"]));
      } else if (type === "multiselect") {
        if ((data[field] as unknown[])?.length)
          params.set(field, (data[field] as unknown[]).join(","));
      } else if (
        data[field] &&
        !(type === "boolean" && data[field] === "all")
      ) {
        params.set(field, String(data[field]));
      }
    }

    if (data.sort && data.sort !== "None")
      params.set("sort", data.sort as string);
    if (data.order === "desc") params.set("order", "desc");

    const page = new URLSearchParams(location.search).get("page");
    if (page && Number(page) > 1) params.set("page", page);

    return params;
  }

  function handleFilterSubmit(data: Record<string, unknown>) {
    const newParams = buildPathWithParams(data);

    if (
      newParams.toString() ===
      (searchParamsState?.[0]?.toString() ?? searchParams.toString())
    )
      return;

    (searchParamsState?.[1] ?? setSearchParams)(newParams);
  }

  return { handleFilterSubmit };
}
