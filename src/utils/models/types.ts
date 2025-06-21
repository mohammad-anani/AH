import type { MouseEventHandler, ReactElement, ReactNode } from "react";
import type { z } from "zod";
import {
  DepartmentSchema,
  PersonSchema,
  PatientSchema,
  EmployeeSchema,
  ReceptionistSchema,
  DoctorSchema,
  AdminSchema,
} from "./schemas";

export type ChildrenProps = {
  children: ReactNode;
};

export type OptionalChildrenProps = {
  children?: ReactNode;
};

export type ClickableChildrenProps = {
  children: ReactElement<{ onClick?: MouseEventHandler }>;
};

export type Department = z.infer<typeof DepartmentSchema>;

export type Person = z.infer<typeof PersonSchema>;

export type Patient = z.infer<typeof PatientSchema>;

export type Employee = z.infer<typeof EmployeeSchema>;

export type Receptionist = z.infer<typeof ReceptionistSchema>;

export type Doctor = z.infer<typeof DoctorSchema>;

export type Admin = z.infer<typeof AdminSchema>;

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
  | null;

export type Key = [string, DataTypes, string?, string?];
