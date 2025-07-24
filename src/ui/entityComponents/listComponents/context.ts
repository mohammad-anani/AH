import { createContext, useContext } from "react";
import type { EntityKey, Key, Setter } from "../../../utils/models/types/util";
import type { rowTypesObject } from "@/utils/models/types/rowTypesObject";

type ContextType<T extends rowTypesObject[EntityKey]> = {
  items: T[];
  fields: Key[];
  canModifyUrl: boolean;
  setFields: Setter<Key[]>;
  UrlState?: [URLSearchParams, (params: URLSearchParams) => void];
  isSelector?: boolean;
  setObject?: Setter<T>;
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
