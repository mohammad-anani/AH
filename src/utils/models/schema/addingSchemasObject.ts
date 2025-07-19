import type { z } from "zod";
import {
  AddAdminSchema,
  AddDoctorSchema,
  AddReceptionistSchema,
  AddPatientSchema,
  AddDepartmentSchema,
  AddTestTypeSchema,
  AddTestOrderSchema,
  AddTestAppointmentSchema,
  AddInsuranceSchema,
  AddOperationSchema,
  AddPrescriptionSchema,
  AddPaymentSchema,
} from "./addingSchemas";
import type { EntityKey } from "../types/util";

export const addingSchemas: Record<EntityKey, z.ZodObject<z.ZodRawShape>> = {
  Admin: AddAdminSchema,
  Doctor: AddDoctorSchema,
  Receptionist: AddReceptionistSchema,
  Patient: AddPatientSchema,
  Department: AddDepartmentSchema,
  TestType: AddTestTypeSchema,
  TestOrder: AddTestOrderSchema,
  TestAppointment: AddTestAppointmentSchema,
  Insurance: AddInsuranceSchema,
  Operation: AddOperationSchema,
  Prescription: AddPrescriptionSchema,
  Payment: AddPaymentSchema,
};
