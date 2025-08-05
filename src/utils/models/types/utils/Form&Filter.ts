import type { JSX } from "react";
import type { typesObject } from "../normal/typesObject";
import type { Setter } from "./basics";

import type { Primitive } from "react-hook-form";
import type { DisplayEntityKey, EntityKey } from "./entityKeys";
import type { RouteConfig } from "../../componentsConfig/routeConfig";

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
  (data: {
    field: Primitive;
    onChange: Setter<Primitive>;
    role: "admin" | "receptionist" | "doctor";
  }) => JSX.Element,
  DataTypes,
];

export type customFormProps = [
  (data: {
    field: Primitive;
    onChange: Setter<Primitive>;
    isSubmitting?: boolean;
    role: "admin" | "receptionist" | "doctor";
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
    | [EntityKey, RouteConfig<EntityKey>, Role],
];

export type FilterKey = [
  name: string,
  type: DataTypes | "custom",
  data?:
    | Array<Primitive>
    | customFilterProps
    | [string, string]
    | string
    | [EntityKey, RouteConfig<EntityKey>, Role],
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
export type Role = "Admin" | "Receptionist" | "Doctor";
