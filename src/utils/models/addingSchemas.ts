/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AdminSchema,
  DoctorSchema,
  ReceptionistSchema,
  PatientSchema,
  DepartmentSchema,
  EmployeeSchema,
  PersonSchema,
} from "./schemas.ts";

import { z } from "zod";

const AddPersonSchema = PersonSchema.omit({ ID: true });

const AddEmployeeSchema = EmployeeSchema.omit({ ID: true }).extend({
  Person: AddPersonSchema,
});

export const AddAdminSchema = AdminSchema.omit({
  ID: true,
  CreatedAt: true,
  CreatedByAdminID: true,
}).extend({
  Employee: AddEmployeeSchema,
});

export const AddDoctorSchema = DoctorSchema.omit({
  ID: true,
  CreatedAt: true,
}).extend({
  Employee: AddEmployeeSchema,
});

export const AddReceptionistSchema = ReceptionistSchema.omit({
  ID: true,
  CreatedAt: true,
}).extend({
  Employee: AddEmployeeSchema,
});

export const AddPatientSchema = PatientSchema.omit({
  ID: true,
  CreatedAt: true,
}).extend({
  Person: AddPersonSchema,
});

export const AddDepartmentSchema = DepartmentSchema.omit({
  ID: true,
  CreatedAt: true,
  CreatedByAdminID: true,
});

export const addingSchemas: Record<string, z.ZodObject<any>> = {
  Admins: AddAdminSchema,
  Doctors: AddDoctorSchema,
  Receptionists: AddReceptionistSchema,
  Patients: AddPatientSchema,
  Departments: AddDepartmentSchema,
};
