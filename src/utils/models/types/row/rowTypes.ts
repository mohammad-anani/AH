import type z from "zod";
import type {
  DepartmentRowSchema,
  AdminRowSchema,
  DoctorRowSchema,
  PatientRowSchema,
  ReceptionistRowSchema,
  TestTypeRowSchema,
  TestOrderRowSchema,
  TestAppointmentRowSchema,
  AppointmentRowSchema,
  InsuranceRowSchema,
  OperationRowSchema,
} from "../../zod/rowSchemas";

export type DepartmentRow = z.infer<typeof DepartmentRowSchema>;
export type AdminRow = z.infer<typeof AdminRowSchema>;
export type DoctorRow = z.infer<typeof DoctorRowSchema>;
export type PatientRow = z.infer<typeof PatientRowSchema>;
export type ReceptionistRow = z.infer<typeof ReceptionistRowSchema>;
export type TestTypeRow = z.infer<typeof TestTypeRowSchema>;
export type TestOrderRow = z.infer<typeof TestOrderRowSchema>;
export type TestAppointmentRow = z.infer<typeof TestAppointmentRowSchema>;
export type AppointmentRow = z.infer<typeof AppointmentRowSchema>;
export type InsuranceRow = z.infer<typeof InsuranceRowSchema>;
export type OperationRow = z.infer<typeof OperationRowSchema>;
