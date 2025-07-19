import { useNavigate } from "react-router-dom";
import { isTemporalType } from "./utils";
import type { Key } from "@/utils/models/types/util";

export function useFilterNavigation(fields: Key[]) {
  const navigate = useNavigate();

  function buildPathWithParams(data: Record<string, unknown>): string {
    const params = new URLSearchParams();

    for (const [field, type] of fields) {
      if (isTemporalType(type ?? "null") || type === "number") {
        if (data[field + "From"])
          params.set(field + "From", String(data[field + "From"]));
        if (data[field + "To"])
          params.set(field + "To", String(data[field + "To"]));
      } else if (type === "array") {
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

    const filterIndex = location.pathname.indexOf("/filter");
    const basePath =
      filterIndex >= 0
        ? location.pathname.slice(0, filterIndex)
        : location.pathname;

    return `${basePath}${params.toString() ? `?${params.toString()}` : ""}`;
  }

  function handleFilterSubmit(data: Record<string, unknown>) {
    const newPath = buildPathWithParams(data);
    navigate(newPath);
  }

  return { handleFilterSubmit };
}
