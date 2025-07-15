/* eslint-disable @typescript-eslint/no-explicit-any */
// useFilterNavigation.ts
import { useNavigate } from "react-router-dom";
import { isTemporalType } from "./utils";
import type { Key } from "@/utils/models/types";

export function useFilterNavigation(fields: Key[]) {
  const navigate = useNavigate();

  function buildPathWithParams(data: Record<string, any>): string {
    const params = new URLSearchParams();

    for (const [field, type] of fields) {
      if (isTemporalType(type ?? "null") || type === "money") {
        if (data[field + "From"])
          params.set(field + "From", data[field + "From"]);
        if (data[field + "To"]) params.set(field + "To", data[field + "To"]);
      } else if (type === "array") {
        if (data[field]?.length) params.set(field, data[field].join(","));
      } else if (
        data[field] &&
        !(type === "boolean" && data[field] === "all")
      ) {
        params.set(field, data[field]);
      }
    }

    if (data.sort !== "None") params.set("sort", data.sort);
    if (data.order === "desc") params.set("order", "desc");

    const page = new URLSearchParams(location.search).get("page");
    if (page && Number(page) > 1) params.set("page", page);

    const filterIndex = location.pathname.indexOf("/filter");
    const basePath =
      filterIndex >= 0
        ? location.pathname.slice(0, filterIndex)
        : location.pathname;

    return `${basePath}${params.toString() ? `?${params.toString()}` : ""}`;
  }

  function handleFilterSubmit(data: Record<string, any>) {
    const newPath = buildPathWithParams(data);
    navigate(newPath);
  }

  return { handleFilterSubmit };
}
