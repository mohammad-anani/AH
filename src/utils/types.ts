import type { MouseEventHandler, ReactElement, ReactNode } from "react";

export type ChildrenProps = {
  children: ReactNode;
};

export type OptionalChildrenProps = {
  children?: ReactNode;
};

export type ClickableChildrenProps = {
  children: ReactElement<{ onClick?: MouseEventHandler }>;
};

export type Department = {
  ID: number;
  Name: string;
  Phone: string;
  CreatedByAdminID: number;
  CreatedAt: string;
};

export type Person = {
  ID: number;
  FirstName: string;
  MiddleName: string;
  LastName: string;
  Gender: string;
  Age: number;
  CountryName: string;
  Phone: string;
  Email: string;
  Username: string;
};

export type Patient = {
  ID: number;
  Person: Person;
  CreatedByReceptionistID: number;
  CreatedAt: string;
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
  | null;

export type Employee = {
  ID: number;
  Person: Person;
  DepartmentID: number;
  Salary: number;
  HireDate: string;
  LeaveDate: string | null;
  isActive: boolean;
  WorkingDays: string[];
  ShiftStart: string;
  ShiftEnd: string;
};

export type Receptionist = {
  ID: number;
  Employee: Employee;
  CreatedByAdminID: number;
  CreatedAt: string;
};

export type Doctor = {
  ID: number;
  Employee: Employee;
  Specialization: string;
  CreatedByReceptionistID: number;
  CreatedAt: string;
};

export type Admin = {
  ID: number;
  Employee: Employee;
  CreatedByAdminID?: number;
  CreatedAt: string;
};

export type Key = [string, DataTypes, string?, string?];
