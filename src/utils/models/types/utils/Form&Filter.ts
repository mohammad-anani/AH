import type { JSX } from "react";
import type { typesObject } from "../normal/typesObject";
import type { Setter } from "./basics";

import type { DataFields, RowTemplate } from "./routeTypes";

import type { SelectorConfig } from "./selectorTypes";
import type { Primitive } from "react-hook-form";
import type { Role } from "../../componentsConfig/utils/filterReusableFields";
import type { DisplayEntityKey, EntityKey } from "./entityKeys";

export type DataTypes =
  | "string"
  | "number"
  | "boolean"
  | "phone"
  | "date"
  | "datetime"
  | "multiselect"
  | "time"
  | "uniselect"
  | "money"
  | "selector"
  | "email";

export type customFilterProps = [
  (data: { field: Primitive; onChange: Setter<Primitive> }) => JSX.Element,
  DataTypes,
];

export type customFormProps = [
  (data: {
    field: Primitive;
    onChange: Setter<Primitive>;
    isSubmitting?: boolean;
  }) => JSX.Element,
  DataTypes,
];

export type FormKey<T extends DisplayEntityKey> = [
  label: string,
  fieldKey: DotAccess<typesObject[T]>,
  type: DataTypes | "custom",
  mode: "add" | "update" | "both",
  data?:
    | Array<Primitive>
    | customFormProps
    | [string, string]
    | string
    | [
        EntityKey,
        SelectorConfig<EntityKey>,
        RowTemplate<EntityKey>,
        DataFields<EntityKey>,
        FilterKey[],
        Role,
      ],
];

export type FilterKey = [
  name: string,
  type: DataTypes | "custom",
  data?:
    | Array<Primitive>
    | customFilterProps
    | [string, string]
    | string
    | [
        EntityKey,
        SelectorConfig<EntityKey>,
        RowTemplate<EntityKey>,
        DataFields<EntityKey>,
        FilterKey[],
        Role,
      ],
];

export type DotAccess<T, Prefix extends string = ""> = {
  [K in keyof T]: T[K] extends object
    ? T[K] extends Array<Primitive>
      ? `${Prefix}${Extract<K, string>}` // don't recurse into arrays
      :
          | `${Prefix}${Extract<K, string>}`
          | DotAccess<T[K], `${Prefix}${Extract<K, string>}.`>
    : `${Prefix}${Extract<K, string>}`;
}[keyof T];
