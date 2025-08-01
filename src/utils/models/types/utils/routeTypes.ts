import type { Primitive } from "zod";
import type { typesObject } from "../normal/typesObject";
import type { EntityKey } from "./entityKeys";
import type { rowTypesObject } from "../row/rowTypesObject";

export type SubLinks<T extends EntityKey> = (
  item: typesObject[T],
) => [
  text: string,
  link: string,
  state?: Record<keyof typesObject[EntityKey], Primitive>,
][];

export type DataFields<T extends EntityKey> = (
  item: typesObject[T],
) => [label: string, value: Primitive, link?: string, entity?: EntityKey][];

export type RowTemplate<T extends EntityKey> = [
  string[],
  (item: rowTypesObject[T]) => Primitive[],
  number[],
];
