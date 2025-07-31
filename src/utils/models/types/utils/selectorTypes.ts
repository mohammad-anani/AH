import type { rowTypesObject } from "../row/rowTypesObject";
import type { Setter } from "./basics";
import type { EntityKey } from "./entityKeys";

export type SelectorConfig<T extends EntityKey> = {
  selectedDisplay: (item: rowTypesObject[T]) => string;
  path: string;
};

export type SelectedObjectState<T extends EntityKey> = [
  rowTypesObject[T] | undefined,
  Setter<rowTypesObject[T] | undefined>,
];
export type SearchParamsState = [URLSearchParams, Setter<URLSearchParams>];
