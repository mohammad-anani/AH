import type z from "zod";
import type {
  AddPersonSchema,
  AddEmployeeSchema,
  AddAdminSchema,
  AddReceptionistSchema,
  AddDoctorSchema,
  AddPatientSchema,
  AddDepartmentSchema,
  AddTestTypeSchema,
  AddServiceSchema,
  AddAppointmentSchema,
  AddAppointmentFromPreviousSchema,
  AddTestAppointmentSchema,
  AddTestAppointmentFromTestOrderSchema,
  AddTestOrderSchema,
  AddOperationSchema,
  AddPrescriptionSchema,
  AddInsuranceSchema,
} from "../../zod/addSchemas";

export type AddPerson = z.infer<typeof AddPersonSchema>;
export type AddEmployee = z.infer<typeof AddEmployeeSchema>;
export type AddAdmin = z.infer<typeof AddAdminSchema>;
export type AddReceptionist = z.infer<typeof AddReceptionistSchema>;
export type AddDoctor = z.infer<typeof AddDoctorSchema>;
export type AddPatient = z.infer<typeof AddPatientSchema>;
export type AddDepartment = z.infer<typeof AddDepartmentSchema>;
export type AddTestType = z.infer<typeof AddTestTypeSchema>;
export type AddService = z.infer<typeof AddServiceSchema>;
export type AddAppointment = z.infer<typeof AddAppointmentSchema>;
export type AddAppointmentFromPrevious = z.infer<
  typeof AddAppointmentFromPreviousSchema
>;
export type AddTestAppointment = z.infer<typeof AddTestAppointmentSchema>;
export type AddTestAppointmentFromTestOrder = z.infer<
  typeof AddTestAppointmentFromTestOrderSchema
>;
export type AddTestOrder = z.infer<typeof AddTestOrderSchema>;
export type AddOperation = z.infer<typeof AddOperationSchema>;
export type AddPrescription = z.infer<typeof AddPrescriptionSchema>;
export type AddInsurance = z.infer<typeof AddInsuranceSchema>;

