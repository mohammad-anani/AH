import type { ChildrenProps, Key } from "@/utils/models/types";
import { useState } from "react";
import { ListContext } from "./listComponents/context";
import Items from "./listComponents/Items";
import Pagination from "./listComponents/Pagination";
import ClearFilter from "./listComponents/ClearFilter";
import Filter from "./listComponents/Filter";

export default function List<T>({
  children,
  items,
  canModifyUrl = true,
}: ChildrenProps & { items: T[]; canModifyUrl?: boolean }) {
  const [fields, setFields] = useState<Key[]>({} as Key[]);

  return (
    <ListContext.Provider
      value={{
        items,
        fields,
        canModifyUrl,
        setFields,
      }}
    >
      <>{children}</>
    </ListContext.Provider>
  );
}

List.Items = Items;
List.Filter = Filter;
List.Pagination = Pagination;
List.ClearFilter = ClearFilter;
