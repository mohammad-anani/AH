/* eslint-disable @typescript-eslint/no-explicit-any */
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
} from "./rowSchemas";

export const rowSchemas: Record<string, z.ZodObject<any>> = {
  AdminRows: AdminRowSchema,
  DepartmentRows: DepartmentRowSchema,
  DoctorRows: DoctorRowSchema,
  PatientRows: PatientRowSchema,
  ReceptionistRows: ReceptionistRowSchema,
  TestTypeRows: TestTypeRowSchema,
  TestOrderRows: TestOrderRowSchema,
  TestAppointmentRows: TestAppointmentRowSchema,
};
