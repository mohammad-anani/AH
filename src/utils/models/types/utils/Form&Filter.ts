import type { JSX } from "react";
import type { Setter } from "./basics";

import type { SelectOption } from "@/ui/form-inputs/UniSelectInput";
import type { Primitive } from "react-hook-form";
import type { RouteConfig } from "../../componentsConfig/routeConfig";
import type { addTypesObject } from "../add";
import type { updateTypesObject } from "../update";
import type { DisplayEntityKey, EntityKey } from "./entityKeys";

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

//data is additional config for the datatype
export type FormKey<T extends DisplayEntityKey> = [
  label: string,
  fieldKey: DotAccess<addTypesObject[T]> | DotAccess<updateTypesObject[T]>,
  type: DataTypes | "custom",
  mode: "add" | "update" | "both",
  data?:
  | Array<Primitive> //uniselect fields,...
  | customFormProps
  | SelectOption[]// mutliselect option array
  | [string, string]//for boolean combobox
  | string
  | [EntityKey, RouteConfig<EntityKey>, Role]//for selector
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


//get object fields and spread them as a type in string
export type DotAccess<T> = {
  [K in keyof T]: `${Extract<K, string>}`;
}[keyof T];

export type Role = "Admin" | "Receptionist" | "Doctor";
export type smallRole = "admin" | "receptionist" | "doctor";
