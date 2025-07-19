import { createContext, useContext } from "react";
import type { Key, Setter } from "../../../utils/models/types/util";

type ContextType<T> = {
  items: T[];
  fields: Key[];
  canModifyUrl: boolean;
  setFields: Setter<Key[]>;
};

const ListContext = createContext<ContextType<unknown> | undefined>(undefined);

export default function useListContext<T>() {
  const ctx = useContext(ListContext);
  if (!ctx) throw new Error("useListContext must be used within a <List>");
  return ctx as ContextType<T>;
}

export { ListContext };
