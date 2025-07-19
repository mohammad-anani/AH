/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AdminSchema,
  DoctorSchema,
  ReceptionistSchema,
  PatientSchema,
  DepartmentSchema,
  EmployeeSchema,
  PersonSchema,
  TestTypeSchema,
  TestOrderSchema,
  TestAppointmentSchema,
  CountrySchema,
  InsuranceSchema,
  OperationSchema,
  PrescriptionSchema,
  PaymentSchema,
} from "./schemas.ts";

const AddPersonSchema = PersonSchema.omit({ ID: true });

const AddEmployeeSchema = EmployeeSchema.omit({
  ID: true,
}).extend({
  Person: AddPersonSchema,
});

export const AddAdminSchema = AdminSchema.omit({
  ID: true,
  CreatedAt: true,
  CreatedByAdminID: true,
}).extend({
  Employee: AddEmployeeSchema,
});

export const AddDoctorSchema = DoctorSchema.omit({
  ID: true,
  CreatedAt: true,
}).extend({
  Employee: AddEmployeeSchema,
});

export const AddReceptionistSchema = ReceptionistSchema.omit({
  ID: true,
  CreatedAt: true,
}).extend({
  Employee: AddEmployeeSchema,
});

export const AddPatientSchema = PatientSchema.omit({
  ID: true,
  CreatedAt: true,
}).extend({
  Person: AddPersonSchema,
});

export const AddDepartmentSchema = DepartmentSchema.omit({
  ID: true,
  CreatedAt: true,
  CreatedByAdminID: true,
});

export const AddTestTypeSchema = TestTypeSchema.omit({
  ID: true,
  CreatedAt: true,
  CreatedByAdminID: true,
});

export const AddTestOrderSchema = TestOrderSchema.omit({
  ID: true,
  OrderedAt: true,
});

export const AddTestAppointmentSchema = TestAppointmentSchema.omit({
  ID: true,
  ResultDate: true,
  CreatedAt: true,
});

export const AddCountrySchema = CountrySchema.omit({
  ID: true,
});

export const AddInsuranceSchema = InsuranceSchema.omit({
  ID: true,
  CreatedAt: true,
  CreatedByReceptionistID: true,
});

export const AddOperationSchema = OperationSchema.omit({
  ID: true,
  CreatedAt: true,
  CreatedByReceptionistID: true,
});

export const AddPrescriptionSchema = PrescriptionSchema.omit({
  ID: true,
});

export const AddPaymentSchema = PaymentSchema.omit({
  ID: true,
});
