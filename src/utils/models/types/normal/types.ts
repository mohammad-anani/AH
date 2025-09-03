import type z from "zod";
import type {
  DepartmentSchema,
  PersonSchema,
  PatientSchema,
  EmployeeSchema,
  ReceptionistSchema,
  TestOrderSchema,
  TestAppointmentSchema,
  TestTypeSchema,
  InsuranceSchema,
  OperationSchema,
  AppointmentSchema,
  BillSchema,
  PaymentSchema,
} from "../../zod/schemas";
import type { AdminSchema } from "../../zod/schemas/human-resources/admin";
import type { DoctorSchema } from "../../zod/schemas/human-resources/doctor";
import type { CountrySchema } from "../../zod/schemas";
import type { PrescriptionRowSchema } from "../../zod/rowSchemas";

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

export type Insurance = z.infer<typeof InsuranceSchema>;
export type Operation = z.infer<typeof OperationSchema>;

export type Appointment = z.infer<typeof AppointmentSchema>;

export type Country = z.infer<typeof CountrySchema>;
export type Prescription = z.infer<typeof PrescriptionRowSchema>;
export type Bill = z.infer<typeof BillSchema>;
export type Payment = z.infer<typeof PaymentSchema>;
