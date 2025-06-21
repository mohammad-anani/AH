/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext } from "react";
import type { DataTypes, Key, Setter } from "../../utils/models/types";

type ContextType<T> = {
  items: T[];
  fields: Key[];
  filter: { [key: string]: any };
  order: string;
  sort: string;
  canModifyUrl: boolean;
  setFields: Setter<[string, DataTypes, string?, string?][]>;
  setFilter: Setter<{ [key: string]: any }>;
  setOrder: Setter<string>;
  setSort: Setter<string>;
};

const ListContext = createContext<ContextType<any> | undefined>(undefined);

export default function useListContext<T>() {
  const ctx = useContext(ListContext);
  if (!ctx) throw new Error("useListContext must be used within a <List>");
  return ctx as ContextType<T>;
}

export { ListContext };
