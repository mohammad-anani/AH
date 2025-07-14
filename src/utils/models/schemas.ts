/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from "zod";

const numberCallBack = (val: any) =>
  typeof val === "number"
    ? val
    : typeof val === "string" && val.trim() !== ""
      ? Number(val)
      : undefined;

const date = z.string().date();

const nonEmptyString = z
  .string()
  .nonempty({ message: "This field cannot be empty." });

const positiveNumber = z.preprocess(
  numberCallBack,
  z.number().nonnegative({ message: "Number must be zero or positive." }),
);

const validDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as const;

const datetime = (withSeconds: boolean = true) =>
  z.string().datetime({
    local: true,
    precision: withSeconds ? 0 : -1,
    message: "Invalid datetime format.",
  });

const time = (withSeconds: boolean = true) =>
  z.string().time({
    precision: withSeconds ? 0 : 0,
    message: "Invalid time format.",
  });

const boolean = (trueLabel: string, falseLabel: string) =>
  z
    .preprocess(
      (val) => {
        if (typeof val === "boolean")
          return val ? trueLabel.toLowerCase() : falseLabel.toLowerCase();
        if (typeof val === "string") return val.toLowerCase();
        return val;
      },
      z.enum([trueLabel.toLowerCase(), falseLabel.toLowerCase()], {
        message: `Value must be either "${trueLabel}" or "${falseLabel}".`,
      }),
    )
    .transform((val) => val === trueLabel.toLowerCase());

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

export const schemas: Record<string, z.ZodObject<any>> = {
  Admins: AdminSchema,
  Departments: DepartmentSchema,
  Doctors: DoctorSchema,
  Patients: PatientSchema,
  Receptionists: ReceptionistSchema,
};
