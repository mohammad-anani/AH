import { useState } from "react";
import type { ChildrenProps, DataTypes } from "../utils/types";

import Items from "./ListComponents/Items";
import Pagination from "./ListComponents/Pagination";
import Filter from "./ListComponents/Filter";
import { ListContext } from "./ListComponents/context";
import ClearFilter from "./ListComponents/ClearFilter";

export default function List<T>({
  children,
  items,
  canModifyUrl = true,
}: ChildrenProps & { items: T[]; canModifyUrl?: boolean }) {
  const [fields, setFields] = useState<[string, DataTypes, string?, string?][]>(
    [],
  );

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
List.Pagination = Pagination;
List.ClearFilter = ClearFilter;
List.Filter = Filter;
