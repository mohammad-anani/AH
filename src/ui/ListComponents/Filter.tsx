/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ChildrenProps, DataTypes } from "../../utils/models/types";
import useListContext from "./context";
import Order from "./Order";
import { Form } from "./Form";
import SearchButton from "./SearchButton";
import { useNavigate, useSearchParams } from "react-router-dom";
import { convertStringToType, temporals } from "./utils";
import Sort from "./Sort";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

type FieldTuple = [string, DataTypes, string?, string?];
type reduceObjectType = { [key: string]: DataTypes | string };

function buildDefaultValues(
  fields: FieldTuple[],
  params: URLSearchParams,
): reduceObjectType {
  const defaults: reduceObjectType = {};

  for (const [field, type] of fields) {
    if (temporals.includes(type ?? "null")) {
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

function buildPathWithParams(
  fields: FieldTuple[],
  data: Record<string, any>,
  basePath: string,
): string {
  const params = new URLSearchParams();

  for (const [field, type] of fields) {
    if (temporals.includes(type ?? "null")) {
      if (data[field + "From"])
        params.set(field + "From", data[field + "From"]);
      if (data[field + "To"]) params.set(field + "To", data[field + "To"]);
    } else if (type === "array") {
      if (data[field]?.length) params.set(field, data[field].join(","));
    } else if (data[field] && !(type === "boolean" && data[field] === "all")) {
      params.set(field, data[field]);
    }
  }

  if (data.sort !== "None") params.set("sort", data.sort);
  if (data.order === "desc") params.set("order", "desc");

  const page = new URLSearchParams(location.search).get("page");
  if (page && Number(page) > 1) params.set("page", page);

  return `${basePath}${params.toString() ? `?${params.toString()}` : ""}`;
}

export default function Filter({
  children,
  fields,
}: ChildrenProps & { fields: FieldTuple[] }) {
  const { canModifyUrl, setFields } = useListContext();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    setFields(fields);
  }, [fields, setFields]);

  const defaultValues = buildDefaultValues(fields, searchParams);
  const methods = useForm({ defaultValues });
  const { handleSubmit } = methods;

  function onSubmit(data: Record<string, any>) {
    const filterIndex = location.pathname.indexOf("/filter");
    const basePath =
      filterIndex >= 0
        ? location.pathname.slice(0, filterIndex)
        : location.pathname;

    const newPath = buildPathWithParams(fields, data, basePath);
    navigate(newPath);
  }

  if (!canModifyUrl) return null;

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-5 text-xl"
      >
        {children}
      </form>
    </FormProvider>
  );
}

Filter.Order = Order;
Filter.Sort = Sort;
Filter.Form = Form;
Filter.SearchButton = SearchButton;
