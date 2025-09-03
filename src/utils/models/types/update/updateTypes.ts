import type z from "zod";
import type {
  UpdatePersonSchema,
  UpdateEmployeeSchema,
  UpdateAdminSchema,
  UpdateReceptionistSchema,
  UpdateDoctorSchema,
  UpdatePatientSchema,
  UpdateDepartmentSchema,
  UpdateTestTypeSchema,
  UpdateServiceSchema,
  UpdateAppointmentSchema,
  UpdateTestAppointmentSchema,
  UpdateOperationSchema,
  UpdatePrescriptionSchema,
  UpdateInsuranceSchema,
  RenewInsuranceSchema,
  StartServiceSchema,
  CancelServiceSchema,
  CompleteServiceSchema,
  RescheduleServiceSchema,
} from "../../zod/updateSchemas";

export type UpdatePerson = z.infer<typeof UpdatePersonSchema>;
export type UpdateEmployee = z.infer<typeof UpdateEmployeeSchema>;
export type UpdateAdmin = z.infer<typeof UpdateAdminSchema>;
export type UpdateReceptionist = z.infer<typeof UpdateReceptionistSchema>;
export type UpdateDoctor = z.infer<typeof UpdateDoctorSchema>;
export type UpdatePatient = z.infer<typeof UpdatePatientSchema>;
export type UpdateDepartment = z.infer<typeof UpdateDepartmentSchema>;
export type UpdateTestType = z.infer<typeof UpdateTestTypeSchema>;
export type UpdateService = z.infer<typeof UpdateServiceSchema>;
export type UpdateAppointment = z.infer<typeof UpdateAppointmentSchema>;
export type UpdateTestAppointment = z.infer<typeof UpdateTestAppointmentSchema>;
export type UpdateOperation = z.infer<typeof UpdateOperationSchema>;
export type UpdatePrescription = z.infer<typeof UpdatePrescriptionSchema>;
export type UpdateInsurance = z.infer<typeof UpdateInsuranceSchema>;
export type RenewInsurance = z.infer<typeof RenewInsuranceSchema>;
export type StartService = z.infer<typeof StartServiceSchema>;
export type CancelService = z.infer<typeof CancelServiceSchema>;
export type CompleteService = z.infer<typeof CompleteServiceSchema>;
export type RescheduleService = z.infer<typeof RescheduleServiceSchema>;
