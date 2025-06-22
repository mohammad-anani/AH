/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from "zod";

export const DepartmentSchema = z.object({
  ID: z.number(),
  Name: z.string(),
  Phone: z.string(),
  CreatedByAdminID: z.number(),
  CreatedAt: z.string(),
});

export const PersonSchema = z.object({
  ID: z.number(),
  FirstName: z.string(),
  MiddleName: z.string(),
  LastName: z.string(),
  Gender: z.string(),
  Age: z.preprocess((val) => {
    if (typeof val === "number") {
      return val;
    }

    if (typeof val === "string" && val.trim() !== "") {
      const n = Number(val);
      return isNaN(n) ? undefined : n;
    }
    return undefined;
  }, z.number()),
  CountryName: z.string(),
  Phone: z.string(),
  Email: z.string().email(),
  Username: z.string(),
});

export const PatientSchema = z.object({
  ID: z.number(),
  Person: PersonSchema,
  CreatedByReceptionistID: z.number(),
  CreatedAt: z.string().datetime({ local: true, precision: 0 }),
});

export const EmployeeSchema = z.object({
  ID: z.number(),
  Person: PersonSchema,
  DepartmentID: z.preprocess((val) => {
    if (typeof val === "number") {
      return val;
    }

    if (typeof val === "string" && val.trim() !== "") {
      const n = Number(val);
      return isNaN(n) ? undefined : n;
    }
    return undefined;
  }, z.number()),
  Salary: z.preprocess((val) => {
    if (typeof val === "number") {
      return val;
    }

    if (typeof val === "string" && val.trim() !== "") {
      const n = Number(val);
      return isNaN(n) ? undefined : n;
    }
    return undefined;
  }, z.number()),
  HireDate: z.string(),
  LeaveDate: z.string().nullable(),
  isActive: z.preprocess(
    (val) =>
      (typeof val === "boolean" && val) || val === "true"
        ? true
        : val === "false"
          ? false
          : null,
    z.boolean(),
  ),
  WorkingDays: z.array(z.string()),
  ShiftStart: z.string(),
  ShiftEnd: z.string(),
});

export const ReceptionistSchema = z.object({
  ID: z.number(),
  Employee: EmployeeSchema,
  CreatedByAdminID: z.number(),
  CreatedAt: z.string(),
});

export const DoctorSchema = z.object({
  ID: z.number(),
  Employee: EmployeeSchema,
  Specialization: z.string(),
  CreatedByReceptionistID: z.number(),
  CreatedAt: z.string(),
});

export const AdminSchema = z.object({
  ID: z.number(),
  Employee: EmployeeSchema,
  CreatedByAdminID: z.number().nullable(),
  CreatedAt: z.string(),
});

export const schemas: Record<string, z.ZodObject<any>> = {
  Admins: AdminSchema,
  Departments: DepartmentSchema,
  Doctors: DoctorSchema,
  Patients: PatientSchema,
  Receptionists: ReceptionistSchema,
};
