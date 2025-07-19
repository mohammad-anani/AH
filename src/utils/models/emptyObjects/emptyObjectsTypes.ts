import type {
  Admin,
  Department,
  Doctor,
  Employee,
  Patient,
  Person,
  Receptionist,
  TestType,
  TestOrder,
  TestAppointment,
  Country,
  Insurance,
  Operation,
  Prescription,
  Payment,
} from "../types";

type NullableNumberBoolean<T> = {
  [K in keyof T]: T[K] extends number | boolean
    ? T[K] | null
    : T[K] extends Array<infer U> // for arrays
      ? Array<NullableNumberBoolean<U>>
      : T[K] extends object
        ? NullableNumberBoolean<T[K]>
        : T[K];
};

export type EmptyPerson = NullableNumberBoolean<Person>;
export type EmptyDepartment = NullableNumberBoolean<Department>;
export type EmptyPatient = NullableNumberBoolean<Patient>;
export type EmptyEmployee = NullableNumberBoolean<Employee>;
export type EmptyReceptionist = NullableNumberBoolean<Receptionist>;
export type EmptyDoctor = NullableNumberBoolean<Doctor>;
export type EmptyAdmin = NullableNumberBoolean<Admin>;
export type EmptyTestType = NullableNumberBoolean<TestType>;
export type EmptyTestOrder = NullableNumberBoolean<TestOrder>;
export type EmptyTestAppointment = NullableNumberBoolean<TestAppointment>;

export type EmptyCountry = NullableNumberBoolean<Country>;
export type EmptyInsurance = NullableNumberBoolean<Insurance>;
export type EmptyOperation = NullableNumberBoolean<Operation>;
export type EmptyPrescription = NullableNumberBoolean<Prescription>;
export type EmptyPayment = NullableNumberBoolean<Payment>;
