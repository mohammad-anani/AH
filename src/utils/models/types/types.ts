import type z from "zod";
import type { PaymentSchema } from "../zod/schemas/paymentSchema";
import type { PrescriptionSchema } from "../zod/schemas/prescriptionSchema";
import type { OperationSchema } from "../zod/schemas/operationSchema";
import type { InsuranceSchema } from "../zod/schemas/insuranceSchema";
import type { AppointmentSchema } from "../zod/schemas/appointmentSchema";
import type { DepartmentSchema } from "../zod/schemas/departmentSchema";
import type { CountrySchema } from "../zod/schemas/hr-schemas";
import type {
  TestOrderSchema,
  TestAppointmentSchema,
  TestTypeSchema,
} from "../zod/schemas/test-shemas";
import type {
  PatientSchema,
  EmployeeSchema,
  ReceptionistSchema,
  AdminSchema,
} from "../zod/schemas/hr-schemas";
import type { PersonSchema } from "../zod/schemas/hr-schemas";
import type { DoctorSchema } from "../zod/DoctorSchema";

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
