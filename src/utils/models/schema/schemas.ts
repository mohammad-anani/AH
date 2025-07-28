import { z } from "zod";
import {
  nonEmptyString,
  positiveNumber,
  datetime,
  date,
  validDays,
  time,
} from "./reusableSchemas";

//remove id,edit age
export const PersonSchema = z.object({
  FirstName: nonEmptyString.min(2, {
    message: "First name must be at least 2 characters.",
  }),
  MiddleName: nonEmptyString.min(2, {
    message: "Middle name must be at least 2 characters.",
  }),
  LastName: nonEmptyString.min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  Gender: z.boolean(),
  DateOfBirth: date
    .refine(
      (val) => {
        const date = new Date(val);
        const now = new Date();
        return date <= now;
      },
      {
        message: "Date cannot be in the future",
      },
    )
    .refine(
      (val) => {
        const date = new Date(val);
        const minDate = new Date();
        minDate.setFullYear(new Date().getFullYear() - 120);
        return date >= minDate;
      },
      {
        message: "Date cannot be more than 120 years ago",
      },
    ),
  CountryID: positiveNumber(),
  Phone: nonEmptyString.length(8, {
    message: "Phone must be exactly 8 digits.",
  }),
  Email: nonEmptyString.email({ message: "Invalid email address." }),
  Username: nonEmptyString.min(6, {
    message: "Username must be at least 6 characters.",
  }),
});

export const EmployeeSchema = z.object({
  Person: PersonSchema,
  DepartmentID: positiveNumber(),
  Salary: positiveNumber(),
  HireDate: date,
  LeaveDate: date.nullable(),
  isActive: z.boolean(),
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
  ID: positiveNumber(),
  Name: nonEmptyString.min(3, {
    message: "Department name must be at least 3 characters.",
  }),
  Phone: nonEmptyString.length(8, {
    message: "Phone must be exactly 8 characters.",
  }),
  CreatedByAdminID: positiveNumber(),
  CreatedAt: datetime(true),
});

export const PatientSchema = z.object({
  ID: positiveNumber(),
  Person: PersonSchema,
  CreatedByReceptionistID: positiveNumber(),
  CreatedAt: datetime(),
});

export const ReceptionistSchema = z.object({
  ID: positiveNumber(),
  Employee: EmployeeSchema,
  CreatedByAdminID: positiveNumber(),
  CreatedAt: datetime(),
});

export const DoctorSchema = z.object({
  ID: positiveNumber(),
  Employee: EmployeeSchema,
  Specialization: nonEmptyString.min(2, {
    message: "Specialization must be at least 2 characters.",
  }),
  CreatedByReceptionistID: positiveNumber(),
  CreatedAt: datetime(),
});

export const AdminSchema = z.object({
  ID: positiveNumber(),
  Employee: EmployeeSchema,
  CreatedByAdminID: positiveNumber().nullable(),
  CreatedAt: datetime(),
});

export const TestTypeSchema = z.object({
  ID: positiveNumber(),
  DepartmentID: positiveNumber(),
  Name: nonEmptyString,
  Cost: positiveNumber(),
  CreatedByAdminID: positiveNumber(),
  CreatedAt: datetime(),
});

export const TestAppointmentSchema = z.object({
  ID: positiveNumber(),
  TestOrderID: positiveNumber().nullable(),
  TestID: positiveNumber(),
  PatientID: positiveNumber(),
  ScheduledDate: datetime(),
  Status: nonEmptyString,
  Result: nonEmptyString.nullable(),
  ResultDate: datetime().nullable(),
  PaymentID: positiveNumber(),
  CreatedByReceptionistID: positiveNumber(),
  CreatedAt: datetime(),
});

export const TestOrderSchema = z.object({
  ID: positiveNumber(),
  AppointmentID: positiveNumber(),
  TestTypeID: positiveNumber(),
  OrderedByDoctorID: positiveNumber(),
  OrderedAt: datetime(),
});

export const AppointmentSchema = z.object({
  ID: positiveNumber(),
  DoctorID: positiveNumber(),
  PatientID: positiveNumber(),
  Time: datetime(),
  Reason: nonEmptyString,
  Status: nonEmptyString,
  Notes: z.string(),
  PaymentID: positiveNumber(),
  CreatedByReceptionistID: positiveNumber(),
  CreatedAt: datetime(),
});

export const CountrySchema = z.object({
  ID: positiveNumber(),
  Name: nonEmptyString,
});

export const InsuranceSchema = z.object({
  ID: positiveNumber(),
  PatientID: positiveNumber(),
  ProviderName: nonEmptyString,
  Class: nonEmptyString,
  ExpirationDate: date,
  CreatedByReceptionistID: positiveNumber(),
  CreatedAt: datetime(),
});

export const OperationSchema = z.object({
  ID: positiveNumber(),
  Name: nonEmptyString,
  Description: nonEmptyString,
  PatientID: positiveNumber(),
  DepartmentID: positiveNumber(),
  ScheduledDate: datetime(false),
  Status: nonEmptyString,
  PaymentID: positiveNumber(),
  CreatedByReceptionistID: positiveNumber(),
  CreatedAt: datetime(),
});

export const PrescriptionSchema = z.object({
  ID: positiveNumber(),
  AppointmentID: positiveNumber(),
  Diagnosis: nonEmptyString,
  Medication: nonEmptyString,
  Dosage: nonEmptyString,
  Frequency: nonEmptyString,
  MedicationStart: datetime(),
  MedicationEnd: datetime(),
  Notes: nonEmptyString.nullable(),
});

//for now payments will be added to the PatientPaid,later each transcation has a row in DB
export const PaymentSchema = z.object({
  ID: positiveNumber(),
  Amount: positiveNumber(),
  PatientPaid: positiveNumber(),
  InsurancePaid: positiveNumber(),
  IsPaid: z.boolean(),
});

export const PaySchema = PaymentSchema.extend({
  toPay: positiveNumber(false),
}).refine(
  (payment) => {
    console.log(1);
    return (
      payment.toPay <=
      payment.Amount - payment.InsurancePaid - payment.PatientPaid
    );
  },
  { message: "Cannot Pay more than required", path: ["toPay"] },
);
