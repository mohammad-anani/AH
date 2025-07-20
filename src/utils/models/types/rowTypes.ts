import { z } from "zod";
import {
  DepartmentRowSchema,
  AdminRowSchema,
  DoctorRowSchema,
  PatientRowSchema,
  ReceptionistRowSchema,
  TestTypeRowSchema,
  TestOrderRowSchema,
  TestAppointmentRowSchema,
  AppointmentRowSchema,
} from "../schema/rowSchemas";

export type DepartmentRow = z.infer<typeof DepartmentRowSchema>;
export type AdminRow = z.infer<typeof AdminRowSchema>;
export type DoctorRow = z.infer<typeof DoctorRowSchema>;
export type PatientRow = z.infer<typeof PatientRowSchema>;
export type ReceptionistRow = z.infer<typeof ReceptionistRowSchema>;
export type TestTypeRow = z.infer<typeof TestTypeRowSchema>;
export type TestOrderRow = z.infer<typeof TestOrderRowSchema>;
export type TestAppointmentRow = z.infer<typeof TestAppointmentRowSchema>;
export type AppointmentRow = z.infer<typeof AppointmentRowSchema>;
