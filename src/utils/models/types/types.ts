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
  AppointmentSchema,
} from "../schema/schemas";

export type Department = z.infer<typeof DepartmentSchema>;
export type Person = z.infer<typeof PersonSchema>;
export type Patient = z.infer<typeof PatientSchema>;
export type Employee = z.infer<typeof EmployeeSchema>;
export type Receptionist = z.infer<typeof ReceptionistSchema>;
export type Doctor = z.infer<typeof DoctorSchema>;
export type Admin = z.infer<typeof AdminSchema>;
export type TestOrder = z.infer<typeof TestOrderSchema>;
export type TestAppointment = z.infer<typeof TestAppointmentSchema>;
export type TestType = z.infer<typeof TestTypeSchema>;
export type Country = z.infer<typeof CountrySchema>;
export type Insurance = z.infer<typeof InsuranceSchema>;
export type Operation = z.infer<typeof OperationSchema>;
export type Prescription = z.infer<typeof PrescriptionSchema>;
export type Payment = z.infer<typeof PaymentSchema>;
export type Appointment = z.infer<typeof AppointmentSchema>;

export type {
  DepartmentRow,
  AdminRow,
  DoctorRow,
  PatientRow,
  ReceptionistRow,
  TestTypeRow,
  TestOrderRow,
} from "./rowTypes";
