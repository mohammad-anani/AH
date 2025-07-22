import { z } from "zod";

import type {
  AddDepartmentSchema,
  AddPatientSchema,
  AddEmployeeSchema,
  AddReceptionistSchema,
  AddDoctorSchema,
  AddAdminSchema,
  AddTestTypeSchema,
  AddTestOrderSchema,
  AddTestAppointmentSchema,
  AddInsuranceSchema,
  AddOperationSchema,
  AddPrescriptionSchema,
  AddPaymentSchema,
  AddPersonSchema,
} from "../schema/addingSchemas";

type NullableNumberBoolean<T> = {
  [K in keyof T]: T[K] extends number | boolean
    ? T[K] | null
    : T[K] extends Array<infer U>
      ? Array<NullableNumberBoolean<U>>
      : T[K] extends object
        ? NullableNumberBoolean<T[K]>
        : T[K];
};

export type EmptyPerson = NullableNumberBoolean<
  z.infer<typeof AddPersonSchema>
>;
export type EmptyDepartment = NullableNumberBoolean<
  z.infer<typeof AddDepartmentSchema>
>;
export type EmptyPatient = NullableNumberBoolean<
  z.infer<typeof AddPatientSchema>
>;
export type EmptyEmployee = NullableNumberBoolean<
  z.infer<typeof AddEmployeeSchema>
>;
export type EmptyReceptionist = NullableNumberBoolean<
  z.infer<typeof AddReceptionistSchema>
>;

export type EmptyAppointment = NullableNumberBoolean<
  z.infer<typeof AddReceptionistSchema>
>;

export type EmptyDoctor = NullableNumberBoolean<
  z.infer<typeof AddDoctorSchema>
>;
export type EmptyAdmin = NullableNumberBoolean<z.infer<typeof AddAdminSchema>>;
export type EmptyTestType = NullableNumberBoolean<
  z.infer<typeof AddTestTypeSchema>
>;
export type EmptyTestOrder = NullableNumberBoolean<
  z.infer<typeof AddTestOrderSchema>
>;
export type EmptyTestAppointment = NullableNumberBoolean<
  z.infer<typeof AddTestAppointmentSchema>
>;
export type EmptyInsurance = NullableNumberBoolean<
  z.infer<typeof AddInsuranceSchema>
>;
export type EmptyOperation = NullableNumberBoolean<
  z.infer<typeof AddOperationSchema>
>;
export type EmptyPrescription = NullableNumberBoolean<
  z.infer<typeof AddPrescriptionSchema>
>;
export type EmptyPayment = NullableNumberBoolean<
  z.infer<typeof AddPaymentSchema>
>;
