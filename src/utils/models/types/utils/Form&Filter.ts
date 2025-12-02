import type { JSX } from "react";
import type { typesObject } from "../normal/typesObject";
import type { Setter } from "./basics";

import type { Primitive } from "react-hook-form";
import type { DisplayEntityKey, EntityKey } from "./entityKeys";
import type { RouteConfig } from "../../componentsConfig/routeConfig";
import type { SelectOption } from "@/ui/form-inputs/UniSelectInput";
import type { addTypesObject } from "../add";
import type { updateTypesObject } from "../update";

export type DataTypes =
  | "string"
  | "text"
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
  | "email"
  | "object"
  | "password";

export type customFilterProps = [
  (data: {
    field: Primitive | Primitive[] | [][] | object;
    onChange: Setter<Primitive | Primitive[] | [][] | object>;
    role?: "admin" | "receptionist" | "doctor";
  }) => JSX.Element,
  DataTypes,
];

export type customFormProps = [
  (data: {
    field: Primitive | Primitive[] | [][] | object;
    onChange: Setter<Primitive | Primitive[] | [][] | object>;
    isSubmitting?: boolean;
  }) => JSX.Element,
  DataTypes,
];

export type FormKey<T extends DisplayEntityKey> = [
  label: string,
  fieldKey: DotAccess<addTypesObject[T]> | DotAccess<updateTypesObject[T]>,
  type: DataTypes | "custom",
  mode: "add" | "update" | "both",
  data?:
  | Array<Primitive>
  | customFormProps
  | SelectOption[]
  | [string, string]
  | string
  | [EntityKey, RouteConfig<EntityKey>, Role]
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

// export type DotAccess<T, Prefix extends string = ""> = {
//   [K in keyof T]: T[K] extends object
//     ? T[K] extends Array<Primitive>
//       ? `${Prefix}${Extract<K, string>}` // don't recurse into arrays
//       :
//           | `${Prefix}${Extract<K, string>}`
//           | DotAccess<T[K], `${Prefix}${Extract<K, string>}.`>
//     : `${Prefix}${Extract<K, string>}`;
// }[keyof T];

export type DotAccess<T> = {
  [K in keyof T]: `${Extract<K, string>}`;
}[keyof T];

export type Role = "Admin" | "Receptionist" | "Doctor";
export type smallRole = "admin" | "receptionist" | "doctor";
