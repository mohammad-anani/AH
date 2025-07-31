import { createContext, useContext } from "react";
import type { FilterKey } from "../../../utils/models/types/utils/Form&Filter";
import type { SearchParamsState } from "@/utils/models/types/utils/selectorTypes";
import type { EntityKey } from "@/utils/models/types/utils/entityKeys";
import type { Setter } from "@/utils/models/types/utils/basics";
import type { rowTypesObject } from "@/utils/models/types/row/rowTypesObject";

type ContextType<T extends rowTypesObject[EntityKey]> = {
  items: T[];
  fields: FilterKey[];
  canModifyUrl: boolean;
  setFields: Setter<FilterKey[]>;
  searchParamsState?: SearchParamsState;
  setObject?: Setter<T | undefined>;
};

const ListContext = createContext<
  ContextType<rowTypesObject[EntityKey]> | undefined
>(undefined);

export default function useListContext() {
  const ctx = useContext(ListContext);
  if (!ctx) throw new Error("useListContext must be used within a <List>");
  return ctx as ContextType<rowTypesObject[EntityKey]>;
}

export { ListContext };
