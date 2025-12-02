import type { Primitive } from "react-hook-form";
import type { typesObject } from "../normal/typesObject";
import type { rowTypesObject } from "../row/rowTypesObject";
import type { DisplayEntityKey, EntityKey } from "./entityKeys";
import type { SelectorDisplay } from "./selectorTypes";

//Links below the card
export type SubLinks<T extends DisplayEntityKey> = (
  item: typesObject[T],
) => [text: string, link: string, state?: Record<string, Primitive>][];

//Card field and its config
export type DataFields<T extends DisplayEntityKey> = (
  item: typesObject[T],
) => [
  label: string,
  value: Primitive | rowTypesObject[EntityKey],
  link?: string,
  entity?: EntityKey,
  display?: SelectorDisplay<EntityKey>,
][];

export type RowTemplate<T extends EntityKey> = [
  string[],
  (item: rowTypesObject[T]) => Primitive[],
  number[],
];
