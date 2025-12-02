import type { rowTypesObject } from "../row/rowTypesObject";
import type { Setter } from "./basics";
import type { EntityKey } from "./entityKeys";

export type SelectorDisplay<T extends EntityKey> = (
  item: rowTypesObject[T],
) => string;

export type SelectedObjectState<T extends EntityKey> = [
  rowTypesObject[T] | undefined,
  Setter<rowTypesObject[T] | undefined>,
];

export type SearchParamsState = [URLSearchParams, Setter<URLSearchParams>];
