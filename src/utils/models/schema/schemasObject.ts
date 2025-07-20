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
  InsuranceSchema,
  OperationSchema,
  PrescriptionSchema,
  PaymentSchema,
  AppointmentSchema,
} from "./schemas";
import type { EntityKey } from "../types/util";

export const schemas: Record<EntityKey, z.ZodObject<z.ZodRawShape>> = {
  Admin: AdminSchema,
  Department: DepartmentSchema,
  Doctor: DoctorSchema,
  Patient: PatientSchema,
  Receptionist: ReceptionistSchema,
  TestType: TestTypeSchema,
  TestOrder: TestOrderSchema,
  TestAppointment: TestAppointmentSchema,
  Insurance: InsuranceSchema,
  Operation: OperationSchema,
  Prescription: PrescriptionSchema,
  Payment: PaymentSchema,
  Appointment: AppointmentSchema,
};
