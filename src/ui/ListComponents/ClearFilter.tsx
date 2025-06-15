import { cloneElement } from "react";
import type { ClickableChildrenProps } from "../../utils/types";
import { useSearchParams } from "react-router-dom";
import useListContext from "./context";

export default function ClearFilter({ children }: ClickableChildrenProps) {
  const { setFilter, setOrder, setSort } = useListContext();
  const [searchParams, setSearchParams] = useSearchParams();

  if (searchParams.size === 0) return null;

  return cloneElement(children, {
    onClick: () => {
      setFilter({});
      setOrder("asc");
      setSort("None");
      setSearchParams("");
    },
  });
}
