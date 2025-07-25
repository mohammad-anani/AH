import type { ReactNode, ReactElement, MouseEventHandler, JSX } from "react";
import type { Primitive } from "zod";
import type { typesObject } from "./typesObject";
import type { rowTypesObject } from "./rowTypesObject";

export type ChildrenProps = {
  children: ReactNode;
};

export type OptionalChildrenProps = {
  children?: ReactNode;
};

export type ClickableChildrenProps = {
  children: ReactElement<{ onClick?: MouseEventHandler }>;
};

export type Setter<T> = React.Dispatch<React.SetStateAction<T>>;

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
  | "selector";

export type Key = [
  string,
  DataTypes | "custom",
  (Array<Primitive> | customFilterProps | [string, string] | string)?,
];

export type customFilterProps = [
  (data: { field: Primitive; onChange: Setter<Primitive> }) => JSX.Element,
  DataTypes,
];

export type AllEntityKeys = EntityKey | "Person" | "Employee";

const entityKeys = [
  "Department",
  "Admin",
  "Doctor",
  "Patient",
  "Receptionist",
  "TestType",
  "Appointment",
  "TestOrder",
  "TestAppointment",
  "Payment",
  "Insurance",
  "Prescription",
  "Operation",
] as const;

export type EntityKey = (typeof entityKeys)[number];

export type SelectorConfig<T extends EntityKey> = {
  selectedDisplay: (item: rowTypesObject[T]) => string;
  path: string;
};

export const entityCamelMap: Record<EntityKey, string> = Object.fromEntries(
  entityKeys.map((key) => [key, key[0].toLowerCase() + key.slice(1)]),
) as Record<EntityKey, string>;

export type SubLinks<T extends AllEntityKeys> = (
  item: typesObject[T],
) => [text: string, link: string][];

export type dataFields<T extends AllEntityKeys> = (
  item: typesObject[T],
) => [label: string, value: Primitive, link?: string, entity?: EntityKey][];

export type SelectedObjectState<T extends EntityKey> = [
  rowTypesObject[T] | undefined,
  Setter<rowTypesObject[T] | undefined>,
];

export type SearchParamsState = [URLSearchParams, Setter<URLSearchParams>];

export type RowTemplate<T extends EntityKey> = [
  string[],
  (item: rowTypesObject[T]) => Primitive[],
  number[],
];
