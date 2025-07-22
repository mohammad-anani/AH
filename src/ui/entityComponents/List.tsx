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
import type { typesObject } from "@/utils/models/types/typesObject";

export default function List<T extends typesObject[EntityKey]>({
  children,
  items,
  canModifyUrl = true,
  UrlState,
  isSelector,
  setObject,
}: ChildrenProps & {
  items: T[];
  canModifyUrl?: boolean;
  UrlState?: [URLSearchParams, Setter<URLSearchParams>];
  isSelector: boolean;
  setObject?: Setter<T>;
}) {
  const [fields, setFields] = useState<Key[]>({} as Key[]);

  return (
    <ListContext.Provider
      value={
        setObject
          ? {
              items,
              fields,
              canModifyUrl,
              setFields,
              UrlState,
              isSelector,
            }
          : {
              items,
              fields,
              canModifyUrl,
              setFields,
              UrlState,
              isSelector,
              setObject,
            }
      }
    >
      <>{children}</>
    </ListContext.Provider>
  );
}

List.Items = Items;
List.Filter = Filter;
List.Pagination = Pagination;
List.ClearFilter = ClearFilter;
