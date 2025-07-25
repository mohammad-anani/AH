import { createContext, useContext } from "react";
import type {
  EntityKey,
  Key,
  SearchParamsState,
  Setter,
} from "../../../utils/models/types/util";
import type { rowTypesObject } from "@/utils/models/types/rowTypesObject";

type ContextType<T extends rowTypesObject[EntityKey]> = {
  items: T[];
  fields: Key[];
  canModifyUrl: boolean;
  setFields: Setter<Key[]>;
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
