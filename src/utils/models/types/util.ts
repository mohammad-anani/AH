import type { ReactNode, ReactElement, MouseEventHandler, JSX } from "react";
import type { Primitive } from "zod";

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
  | "array"
  | "time"
  | "select"
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

export const entityCamelMap: Record<EntityKey, string> = Object.fromEntries(
  entityKeys.map((key) => [key, key[0].toLowerCase() + key.slice(1)]),
) as Record<EntityKey, string>;
