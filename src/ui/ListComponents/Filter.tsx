/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ChildrenProps, DataTypes } from "../../utils/types";
import useListContext from "./context";
import Order from "./Order";
import { Form } from "./Form";
import SearchButton from "./SearchButton";
import { useNavigate, useSearchParams } from "react-router-dom";
import { convertStringToType, temporals } from "./utils";
import Sort from "./Sort";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

type reduceObjectType = { [key: string]: DataTypes };

export default function Filter({
  children,
  fields,
}: ChildrenProps & { fields: [string, DataTypes, string?, string?][] }) {
  const { canModifyUrl, setFields } = useListContext();

  useEffect(() => {
    setFields(fields);
  }, [setFields, fields]);

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const defaultValues = {
    ...fields.reduce((obj, [field, type]) => {
      if (temporals.includes(type ?? "null")) {
        obj[field + "From"] = (searchParams.get(field + "From") ??
          null) as DataTypes;
        obj[field + "To"] = (searchParams.get(field + "To") ??
          null) as DataTypes;
      } else {
        const value = searchParams.get(field) || "";
        obj[field] = convertStringToType(type ?? "", value) as DataTypes;
      }
      return obj;
    }, {} as reduceObjectType),
    sort: searchParams.get("sort") ?? "None",
    order: searchParams.get("order") ?? "asc",
  };
  const methods = useForm({
    defaultValues: defaultValues,
  });

  const { handleSubmit, reset } = methods;

  useEffect(() => {
    reset(defaultValues);
  }, [JSON.stringify(fields), searchParams.toString()]);

  function onSubmit(data: Record<string, any>) {
    let path = location.pathname.substring(
      0,
      location.pathname.indexOf("/filter"),
    );

    fields.forEach(([field, type]) => {
      if (temporals.includes(type ?? "none")) {
        if (!data[field + "From"]) searchParams.delete(field + "From");
        else searchParams.set(field + "From", data[field + "From"]);

        if (!data[field + "To"]) searchParams.delete(field + "To");
        else searchParams.set(field + "To", data[field + "To"]);
      } else if (type === "array") {
        if (!data[field] || data[field].size === 0) searchParams.delete(field);
        else searchParams.set(field, data[field]?.join(","));
      } else if (
        !data[field] ||
        data[field] === "" ||
        (type === "boolean" && data[field] === "all")
      ) {
        searchParams.delete(field);
      } else {
        searchParams.set(field, data[field]);
      }
    });

    searchParams.delete("sort");
    if (data["sort"] !== "None") searchParams.set("sort", data["sort"]);

    searchParams.delete("order");
    if (data["order"] === "desc") searchParams.set("order", "desc");

    const page = searchParams.get("page");

    searchParams.delete("page");

    if (page && Number(page) > 1) searchParams.set("page", page);

    if (searchParams && searchParams.size > 0) path += "?";
    path += searchParams.toString();
    navigate(path);
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
