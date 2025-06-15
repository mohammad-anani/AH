/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import type { ClickableChildrenProps } from "../../utils/types";
import useListContext from "./context";
import { cloneElement } from "react";

export default function SearchButton({ children }: ClickableChildrenProps) {
  const { fields, order, filter, sort } = useListContext();

  const [sp] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(sp);

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    let path = location.pathname.substring(
      0,
      location.pathname.indexOf("/filter"),
    );

    fields.forEach(([field, type]) => {
      console.log(field, type);
      if (
        !filter[field] ||
        filter[field] === "" ||
        (type === "boolean" && filter[field] === "all")
      ) {
        searchParams.delete(field);
      } else {
        searchParams.set(field, filter[field]);
      }
    });

    searchParams.delete("sort");
    sort !== "None" && searchParams.set("sort", sort);

    searchParams.delete("order");
    order === "desc" && searchParams.set("order", order);

    const page = searchParams.get("page");

    searchParams.delete("page");

    page && Number(page) > 1 && searchParams.set("page", page);
    if (searchParams.size > 0) path += "?";
    path += searchParams.toString();
    navigate(path);
  }
  return cloneElement(children, {
    onClick: handleClick,
  });
}
