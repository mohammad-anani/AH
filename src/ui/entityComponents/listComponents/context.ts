import { createContext, useContext } from "react";
import type { EntityKey, Key, Setter } from "../../../utils/models/types/util";
import type { typesObject } from "@/utils/models/types/typesObject";

type ContextType<T extends typesObject[EntityKey]> = {
  items: T[];
  fields: Key[];
  canModifyUrl: boolean;
  setFields: Setter<Key[]>;
  UrlState?: [URLSearchParams, Setter<URLSearchParams>];
  isSelector?: boolean;
  setObject?: Setter<T>;
};

const ListContext = createContext<
  ContextType<typesObject[EntityKey]> | undefined
>(undefined);

export default function useListContext() {
  const ctx = useContext(ListContext);
  if (!ctx) throw new Error("useListContext must be used within a <List>");
  return ctx as ContextType<typesObject[EntityKey]>;
}

export { ListContext };
