/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from "zod";
import {
  nonEmptyString,
  positiveNumber,
  datetime,
  date,
  boolean,
  validDays,
  time,
  numberCallBack,
} from "./reusableSchemas";

export const PersonSchema = z.object({
  ID: positiveNumber,
  FirstName: nonEmptyString.min(2, {
    message: "First name must be at least 2 characters.",
  }),
  MiddleName: nonEmptyString.min(2, {
    message: "Middle name must be at least 2 characters.",
  }),
  LastName: nonEmptyString.min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  Gender: boolean("male", "female"),
  Age: z.preprocess(
    numberCallBack,
    z
      .number()
      .min(0, { message: "Age cannot be less than 0." })
      .max(120, { message: "Age cannot be greater than 120." }),
  ),
  CountryName: nonEmptyString.min(2, {
    message: "Country name must be at least 2 characters.",
  }),
  Phone: nonEmptyString.length(8, {
    message: "Phone must be exactly 8 digits.",
  }),
  Email: nonEmptyString.email({ message: "Invalid email address." }),
  Username: nonEmptyString.min(6, {
    message: "Username must be at least 6 characters.",
  }),
});

export const EmployeeSchema = z.object({
  ID: positiveNumber,
  Person: PersonSchema,
  DepartmentID: positiveNumber,
  Salary: positiveNumber,
  HireDate: date,
  LeaveDate: date.nullable(),
  isActive: boolean("active", "inactive"),
  WorkingDays: z
    .array(z.enum(validDays, { message: "Invalid day of the week." }))
    .min(1, { message: "Minimum of 1 working day required." })
    .max(7, { message: "Cannot select more than 7 working days." })
    .refine((arr) => new Set(arr).size === arr.length, {
      message: "Working days must be unique.",
    }),
  ShiftStart: time(false),
  ShiftEnd: time(false),
});

export const DepartmentSchema = z.object({
  ID: positiveNumber,
  Name: nonEmptyString.min(3, {
    message: "Department name must be at least 3 characters.",
  }),
  Phone: nonEmptyString.length(8, {
    message: "Phone must be exactly 8 characters.",
  }),
  CreatedByAdminID: positiveNumber,
  CreatedAt: datetime(true),
});

export const PatientSchema = z.object({
  ID: positiveNumber,
  Person: PersonSchema,
  CreatedByReceptionistID: positiveNumber,
  CreatedAt: datetime(),
});

export const ReceptionistSchema = z.object({
  ID: positiveNumber,
  Employee: EmployeeSchema,
  CreatedByAdminID: positiveNumber,
  CreatedAt: datetime(),
});

export const DoctorSchema = z.object({
  ID: positiveNumber,
  Employee: EmployeeSchema,
  Specialization: nonEmptyString.min(2, {
    message: "Specialization must be at least 2 characters.",
  }),
  CreatedByReceptionistID: positiveNumber,
  CreatedAt: datetime(),
});

export const AdminSchema = z.object({
  ID: positiveNumber,
  Employee: EmployeeSchema,
  CreatedByAdminID: positiveNumber.nullable(),
  CreatedAt: datetime(),
});

export const TestTypeSchema = z.object({
  ID: positiveNumber,
  DepartmentID: positiveNumber,
  Name: nonEmptyString,
  Cost: positiveNumber,
  CreatedByAdminID: positiveNumber,
  CreatedAt: datetime(),
});

export const TestAppointmentSchema = z.object({
  ID: positiveNumber,
  TestOrderID: positiveNumber.nullable(),
  TestID: positiveNumber,
  PatientID: positiveNumber,
  ScheduledDate: datetime(),
  Status: nonEmptyString,
  Result: nonEmptyString.nullable(),
  ResultDate: datetime().nullable(),
  PaymentID: positiveNumber,
  CreatedByReceptionistID: positiveNumber,
  CreatedAt: datetime(),
});

export const TestOrderSchema = z.object({
  ID: positiveNumber,
  AppointmentID: positiveNumber,
  TestTypeID: positiveNumber,
  OrderedByDoctorID: positiveNumber,
  OrderedAt: datetime(),
});

export const AppointmentSchema = z.object({
  ID: positiveNumber,
  DoctorID: positiveNumber,
  PatientID: positiveNumber,
  Time: datetime(),
  Reason: nonEmptyString,
  Status: nonEmptyString,
  Notes: z.string(),
  PaymentID: positiveNumber,
  CreatedByReceptionistID: positiveNumber,
  CreatedAt: datetime(),
});

export const CountrySchema = z.object({
  ID: positiveNumber,
  Name: nonEmptyString,
});

export const InsuranceSchema = z.object({
  ID: positiveNumber,
  PatientID: positiveNumber,
  ProviderName: nonEmptyString,
  Class: nonEmptyString,
  ExpirationDate: date,
  CreatedByReceptionistID: positiveNumber,
  CreatedAt: datetime(),
});

export const TestAppointmentRowSchema = z.object({
  ID: positiveNumber,
  PatientName: nonEmptyString,
  TestName: nonEmptyString,
  Date: datetime(),
});

export const OperationSchema = z.object({
  ID: positiveNumber,
  Name: nonEmptyString,
  Description: nonEmptyString,
  PatientID: positiveNumber,
  DepartmentID: positiveNumber,
  ScheduledDate: datetime(false),
  Status: nonEmptyString,
  PaymentID: positiveNumber,
  CreatedByReceptionistID: positiveNumber,
  CreatedAt: datetime(),
});

export const PrescriptionSchema = z.object({
  ID: positiveNumber,
  AppointmentID: positiveNumber,
  Diagnosis: nonEmptyString,
  Medication: nonEmptyString,
  Dosage: nonEmptyString,
  Frequency: nonEmptyString,
  MedicationStart: datetime(),
  MedicationEnd: datetime(),
  Notes: nonEmptyString.nullable(),
});

export const PaymentSchema = z.object({
  ID: positiveNumber,
  Amount: positiveNumber,
  PatientPaid: positiveNumber,
  InsurancePaid: positiveNumber,
  Method: nonEmptyString,
  CreatedByReceptionistID: positiveNumber,
  CreatedAt: datetime(),
});

export const schemas: Record<string, z.ZodObject<any>> = {
  Admins: AdminSchema,
  Departments: DepartmentSchema,
  Doctors: DoctorSchema,
  Patients: PatientSchema,
  Receptionists: ReceptionistSchema,
  TestTypes: TestTypeSchema,
  TestOrders: TestOrderSchema,
  TestAppointments: TestAppointmentSchema,
  TestAppointmentsList: TestAppointmentRowSchema,
  Countries: CountrySchema,
  Insurances: InsuranceSchema,
  Operations: OperationSchema,
  Prescriptions: PrescriptionSchema,
  Payments: PaymentSchema,
};
