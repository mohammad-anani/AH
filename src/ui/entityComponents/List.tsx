import type { rowTypesObject } from "@/utils/models/types/row/rowTypesObject";
import type { ChildrenProps, Setter } from "@/utils/models/types/utils/basics";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import type { FilterKey } from "@/utils/models/types/utils/Form&Filter";
import type { SearchParamsState } from "@/utils/models/types/utils/selectorTypes";
import { useState } from "react";
import ClearFilter from "./listComponents/ClearFilter";
import { ListContext } from "./listComponents/context";
import Filter from "./listComponents/Filter";
import Items from "./listComponents/Items";
import Pagination from "./listComponents/Pagination";

type ListProps<T> = ChildrenProps & {
  items: T[];
  canModifyUrl?: boolean;
  searchParamsState?: [URLSearchParams, (params: URLSearchParams) => void];
  setObject?: Setter<rowTypesObject[EntityKey] | undefined>;
};

export default function List<T>({
  children,
  items,
  canModifyUrl = true,
  searchParamsState,
  setObject,
}: ListProps<T>) {
  const [fields, setFields] = useState<FilterKey[]>({} as FilterKey[]);
  return (
    <ListContext.Provider
      value={{
        items,
        fields,
        canModifyUrl,
        setFields,
        searchParamsState: searchParamsState as SearchParamsState,
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
