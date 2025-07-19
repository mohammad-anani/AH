import type { ReactNode, ReactElement, MouseEventHandler, JSX } from "react";
import type {
  Department,
  Admin,
  Doctor,
  Patient,
  Receptionist,
  TestType,
  TestOrder,
  TestAppointment,
  Payment,
} from "./types";
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
  | "money";

export type Key = [
  string,
  DataTypes | "custom",
  (Array<Primitive> | [(data: customFilterProps) => JSX.Element, DataTypes])?,
];

export type DataComponentPropsTypes = {
  Department: { department: Department };
  Admin: { admin: Admin };
  Doctor: { doctor: Doctor };
  Patient: { patient: Patient };
  Receptionist: { receptionist: Receptionist };
  TestType: { testType: TestType };
  TestOrder: { testOrder: TestOrder };
  TestAppointment: { testAppointment: TestAppointment };
  Payment: { payment: Payment };
};

export type customFilterProps = {
  field: Primitive;
  onChange: Setter<Primitive>;
};
export type EntityKey =
  | "Department"
  | "Admin"
  | "Doctor"
  | "Patient"
  | "Receptionist"
  | "TestType"
  | "TestOrder"
  | "TestAppointment"
  | "Payment"
  | "Insurance"
  | "Prescription"
  | "Operation";
