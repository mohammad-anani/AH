import type z from "zod";
import type {
  FormDepartmentSchema,
  FormAdminSchema,
  FormDoctorSchema,
  FormPatientSchema,
  FormReceptionistSchema,
  FormTestTypeSchema,
  FormTestOrderSchema,
  FormTestAppointmentSchema,
  FormAppointmentSchema,
  FormInsuranceSchema,
  FormOperationSchema,
  FormBillSchema,
  FormPaymentSchema,
} from "../../zod/formSchemas";

export type FormDepartment = z.infer<typeof FormDepartmentSchema>;
export type FormAdmin = z.infer<typeof FormAdminSchema>;
export type FormDoctor = z.infer<typeof FormDoctorSchema>;
export type FormPatient = z.infer<typeof FormPatientSchema>;
export type FormReceptionist = z.infer<typeof FormReceptionistSchema>;
export type FormTestType = z.infer<typeof FormTestTypeSchema>;
export type FormTestOrder = z.infer<typeof FormTestOrderSchema>;
export type FormTestAppointment = z.infer<typeof FormTestAppointmentSchema>;
export type FormAppointment = z.infer<typeof FormAppointmentSchema>;
export type FormInsurance = z.infer<typeof FormInsuranceSchema>;
export type FormOperation = z.infer<typeof FormOperationSchema>;
export type FormBill = z.infer<typeof FormBillSchema>;
export type FormPayment = z.infer<typeof FormPaymentSchema>;
