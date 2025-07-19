/* eslint-disable @typescript-eslint/no-explicit-any */
import type { z } from "zod";
import {
  AdminSchema,
  DepartmentSchema,
  DoctorSchema,
  PatientSchema,
  ReceptionistSchema,
  TestTypeSchema,
  TestOrderSchema,
  TestAppointmentSchema,
  CountrySchema,
  InsuranceSchema,
  OperationSchema,
  PrescriptionSchema,
  PaymentSchema,
} from "./schemas";

export const schemas: Record<string, z.ZodObject<any>> = {
  Admins: AdminSchema,
  Departments: DepartmentSchema,
  Doctors: DoctorSchema,
  Patients: PatientSchema,
  Receptionists: ReceptionistSchema,
  TestTypes: TestTypeSchema,
  TestOrders: TestOrderSchema,
  TestAppointments: TestAppointmentSchema,
  Countries: CountrySchema,
  Insurances: InsuranceSchema,
  Operations: OperationSchema,
  Prescriptions: PrescriptionSchema,
  Payments: PaymentSchema,
};
