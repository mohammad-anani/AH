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
  TestTypeSchema,
  TestOrderSchema,
  TestAppointmentSchema,
  CountrySchema,
  InsuranceSchema,
  OperationSchema,
  PrescriptionSchema,
  PaymentSchema,
  TestAppointmentRowSchema,
} from "./schema/schemas";
import {
  DepartmentRowSchema,
  AdminRowSchema,
  DoctorRowSchema,
  PatientRowSchema,
  ReceptionistRowSchema,
  TestTypeRowSchema,
  TestOrderRowSchema,
} from "./schema/rowSchemas";

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

export type TestOrder = z.infer<typeof TestOrderSchema>;
export type TestAppointment = z.infer<typeof TestAppointmentSchema>;
export type TestAppointmentRow = z.infer<typeof TestAppointmentRowSchema>;
export type TestType = z.infer<typeof TestTypeSchema>;
export type DepartmentRow = z.infer<typeof DepartmentRowSchema>;
export type AdminRow = z.infer<typeof AdminRowSchema>;
export type DoctorRow = z.infer<typeof DoctorRowSchema>;
export type PatientRow = z.infer<typeof PatientRowSchema>;
export type ReceptionistRow = z.infer<typeof ReceptionistRowSchema>;
export type TestTypeRow = z.infer<typeof TestTypeRowSchema>;
export type TestOrderRow = z.infer<typeof TestOrderRowSchema>;
export type Country = z.infer<typeof CountrySchema>;
export type Insurance = z.infer<typeof InsuranceSchema>;
export type Operation = z.infer<typeof OperationSchema>;
export type Prescription = z.infer<typeof PrescriptionSchema>;
export type Payment = z.infer<typeof PaymentSchema>;

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
  | null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Key = [string, DataTypes | "custom", any?];
