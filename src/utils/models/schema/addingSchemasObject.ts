/* eslint-disable @typescript-eslint/no-explicit-any */

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
  AddCountrySchema,
  AddInsuranceSchema,
  AddOperationSchema,
  AddPrescriptionSchema,
  AddPaymentSchema,
} from "./addingSchemas";

export const addingSchemas: Record<string, z.ZodObject<any>> = {
  Admins: AddAdminSchema,
  Doctors: AddDoctorSchema,
  Receptionists: AddReceptionistSchema,
  Patients: AddPatientSchema,
  Departments: AddDepartmentSchema,
  TestTypes: AddTestTypeSchema,
  TestOrders: AddTestOrderSchema,
  TestAppointments: AddTestAppointmentSchema,
  Countries: AddCountrySchema,
  Insurances: AddInsuranceSchema,
  Operations: AddOperationSchema,
  Prescriptions: AddPrescriptionSchema,
  Payments: AddPaymentSchema,
};
