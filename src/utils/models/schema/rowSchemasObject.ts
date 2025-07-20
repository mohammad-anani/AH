import type z from "zod";
import {
  AdminRowSchema,
  DepartmentRowSchema,
  DoctorRowSchema,
  PatientRowSchema,
  ReceptionistRowSchema,
  TestTypeRowSchema,
  TestOrderRowSchema,
  TestAppointmentRowSchema,
  AppointmentRowSchema,
} from "./rowSchemas";
import type { EntityKey } from "../types/util";

export const rowSchemas: Record<EntityKey, z.ZodObject<z.ZodRawShape>> = {
  Admin: AdminRowSchema,
  Department: DepartmentRowSchema,
  Doctor: DoctorRowSchema,
  Patient: PatientRowSchema,
  Receptionist: ReceptionistRowSchema,
  TestType: TestTypeRowSchema,
  TestOrder: TestOrderRowSchema,
  TestAppointment: TestAppointmentRowSchema,
  Operation: TestAppointmentRowSchema,
  Payment: TestAppointmentRowSchema,
  Prescription: TestAppointmentRowSchema,
  Insurance: TestAppointmentRowSchema,
  Appointment: AppointmentRowSchema,
};

//to be changed
