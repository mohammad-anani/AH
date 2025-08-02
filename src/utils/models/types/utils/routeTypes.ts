import type { typesObject } from "../normal/typesObject";
import type { DisplayEntityKey, EntityKey } from "./entityKeys";
import type { rowTypesObject } from "../row/rowTypesObject";
import type { Primitive } from "react-hook-form";

export type SubLinks<T extends EntityKey> = (
  item: typesObject[T],
) => [
  text: string,
  link: string,
  state?: Record<keyof typesObject[EntityKey], Primitive>,
][];

export type DataFields<T extends DisplayEntityKey> = (
  item: typesObject[T],
) => [label: string, value: Primitive, link?: string, entity?: EntityKey][];

export type RowTemplate<T extends EntityKey> = [
  string[],
  (item: rowTypesObject[T]) => Primitive[],
  number[],
];
