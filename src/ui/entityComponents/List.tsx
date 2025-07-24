import type {
  ChildrenProps,
  EntityKey,
  Key,
  Setter,
} from "@/utils/models/types/util";
import { useState } from "react";
import { ListContext } from "./listComponents/context";
import Items from "./listComponents/Items";
import Pagination from "./listComponents/Pagination";
import ClearFilter from "./listComponents/ClearFilter";
import Filter from "./listComponents/Filter";
import type { rowTypesObject } from "@/utils/models/types/rowTypesObject";

export default function List<T extends rowTypesObject[EntityKey]>({
  children,
  items,
  canModifyUrl = true,
  UrlState,
  isSelector,
  setObject,
}: ChildrenProps & {
  items: T[];
  canModifyUrl?: boolean;
  UrlState?: [URLSearchParams, (params: URLSearchParams) => void];
  isSelector: boolean;
  setObject?: Setter<rowTypesObject[EntityKey]>;
}) {
  const [fields, setFields] = useState<Key[]>({} as Key[]);

  return (
    <ListContext.Provider
      value={{
        items,
        fields,
        canModifyUrl,
        setFields,
        UrlState,
        isSelector,
        setObject,
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
