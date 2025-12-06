import type { Setter } from "@/utils/models/types/utils/basics";
import type { SearchParamsState } from "@/utils/models/types/utils/selectorTypes";
import { createContext, useContext } from "react";
import type { FilterKey } from "../../../utils/models/types/utils/Form&Filter";

type ContextType<T> = {
  items: T[];
  fields: FilterKey[];
  canModifyUrl: boolean;
  setFields: Setter<FilterKey[]>;
  searchParamsState?: SearchParamsState;
  setObject?: Setter<T | undefined>;
};

const ListContext = createContext<
  ContextType<unknown> | undefined
>(undefined);

export default function useListContext() {
  const ctx = useContext(ListContext);
  if (!ctx) throw new Error("useListContext must be used within a <List>");
  return ctx as ContextType<unknown>;
}

export { ListContext };

