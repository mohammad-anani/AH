import { useEffect } from "react";
import type { ChildrenProps, DataTypes } from "../../utils/types";
import useListContext from "./context";
import Order from "./Order";
import { Form } from "./Form";
import SearchButton from "./SearchButton";
import { useSearchParams } from "react-router-dom";
import { convertToType } from "./utils";
import Sort from "./Sort";

type reduceObjectType = { [key: string]: DataTypes };

export default function Filter({
  children,
  fields,
}: ChildrenProps & { fields: [string, DataTypes, string?, string?][] }) {
  const { canModifyUrl, setFields, setFilter, setOrder, setSort } =
    useListContext();

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const temporals = "date#datetime#time";
    setFields(fields);
    setFilter(
      fields.reduce((obj, field) => {
        if (temporals.includes(field[1])) {
          obj[field[0] + "From"] = searchParams.get(
            field[0] + "From" || "",
          ) as DataTypes;
          obj[field[0] + "To"] = searchParams.get(
            field[0] + "To" || "",
          ) as DataTypes;
        } else {
          obj[field[0]] = convertToType(
            field[1],
            searchParams.get(field[0]) || "",
          ) as DataTypes;
        }
        return obj;
      }, {} as reduceObjectType),
    );
    setOrder(searchParams.get("order") || "asc");
    setSort(searchParams.get("sort") || "None");
  }, [fields, setFields, setFilter, searchParams, setOrder, setSort]);

  if (!canModifyUrl) return null;

  return <form className="flex flex-col gap-y-5 text-xl">{children}</form>;
}

Filter.Order = Order;
Filter.Sort = Sort;
Filter.Form = Form;
Filter.SearchButton = SearchButton;
