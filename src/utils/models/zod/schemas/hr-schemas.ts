import { z } from "zod";
import {
  nonEmptyString,
  date,
  positiveNumber,
  validDays,
  time,
  datetime,
} from "../reusableSchemas";

// Person schema
export const PersonSchema = z.object({
  FirstName: nonEmptyString.min(2, {
    message: "First name must be at least 2 characters long.",
  }),
  MiddleName: nonEmptyString.min(2, {
    message: "Middle name must be at least 2 characters long.",
  }),
  LastName: nonEmptyString.min(2, {
    message: "Last name must be at least 2 characters long.",
  }),
  Gender: z.boolean({
    required_error: "Gender is required.",
  }),
  DateOfBirth: date
    .refine(
      (val) => {
        const d = new Date(val);
        return d <= new Date();
      },
      { message: "Date of birth cannot be in the future." },
    )
    .refine(
      (val) => {
        const d = new Date(val);
        const minDate = new Date();
        minDate.setFullYear(minDate.getFullYear() - 120);
        return d >= minDate;
      },
      { message: "Date of birth cannot be more than 120 years ago." },
    ),
  Country: z.object({
    ID: positiveNumber().refine((v) => v > 0, {
      message: "Country ID must be a positive number.",
    }),
    Name: nonEmptyString,
  }),
  Phone: nonEmptyString.length(8, {
    message: "Phone number must be exactly 8 characters.",
  }),
  Email: nonEmptyString.email({
    message: "Please enter a valid email address.",
  }),
  Username: nonEmptyString.min(6, {
    message: "Username must be at least 6 characters long.",
  }),
});

// Employee schema
export const EmployeeSchema = z.object({
  Person: PersonSchema,
  DepartmentID: positiveNumber(false).refine((v) => v > 0, {
    message: "Department must be selected.",
  }),
  Salary: positiveNumber(false).refine((v) => v > 0, {
    message: "Salary must be greater than zero.",
  }),
  HireDate: date.refine((val) => new Date(val) <= new Date(), {
    message: "Hire date cannot be in the future.",
  }),
  LeaveDate: date
    .nullable()
    .refine((val) => !val || new Date(val) <= new Date(), {
      message: "Leave date cannot be in the future.",
    }),
  isActive: z.boolean({
    required_error: "Active status must be set.",
  }),
  WorkingDays: z
    .array(z.enum(validDays, { message: "Invalid day of the week." }))
    .min(1, { message: "Please select at least one working day." })
    .max(7, { message: "You cannot select more than 7 working days." })
    .refine((arr) => new Set(arr).size === arr.length, {
      message: "Working days must be unique.",
    }),
  ShiftStart: time(false),
  ShiftEnd: time(false),
});

// Patient schema
export const PatientSchema = z.object({
  ID: positiveNumber(false).refine((v) => v > 0, {
    message: "Patient ID is required.",
  }),
  Person: PersonSchema,
  CreatedByReceptionistID: positiveNumber(false).refine((v) => v > 0, {
    message: "Receptionist ID is required.",
  }),
  CreatedAt: datetime().refine(Boolean, {
    message: "Creation date is required.",
  }),
});

// Receptionist schema
export const ReceptionistSchema = z.object({
  ID: positiveNumber(false).refine((v) => v > 0, {
    message: "Receptionist ID is required.",
  }),
  Employee: EmployeeSchema,
  CreatedByAdminID: positiveNumber(false).refine((v) => v > 0, {
    message: "Creator Admin ID is required.",
  }),
  CreatedAt: datetime().refine(Boolean, {
    message: "Creation date is required.",
  }),
});

// Doctor schema
export const DoctorSchema = z.object({
  ID: positiveNumber(false).refine((v) => v > 0, {
    message: "Doctor ID is required.",
  }),
  Employee: EmployeeSchema,
  Specialization: nonEmptyString.min(2, {
    message: "Specialization must be at least 2 characters long.",
  }),
  CreatedByAdminID: positiveNumber(false).refine((v) => v > 0, {
    message: " ID is required.",
  }),
  CreatedAt: datetime().refine(Boolean, {
    message: "Creation date is required.",
  }),
});

// Admin schema
export const AdminSchema = z.object({
  ID: positiveNumber(false).refine((v) => v > 0, {
    message: "Admin ID is required.",
  }),
  Employee: EmployeeSchema,
  CreatedByAdminID: positiveNumber(true).nullable(),
  CreatedAt: datetime().refine(Boolean, {
    message: "Creation date is required.",
  }),
});

// Country schema
export const CountrySchema = z.object({
  ID: positiveNumber(false).refine((v) => v > 0, {
    message: "Country ID is required.",
  }),
  Name: nonEmptyString.min(2, {
    message: "Country name must be at least 2 characters long.",
  }),
});
