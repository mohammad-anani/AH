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
  InsuranceSchema,
  OperationSchema,
  PrescriptionSchema,
  PaymentSchema,
  AppointmentSchema,
} from "./schemas.ts";

export const AddPersonSchema = PersonSchema;

export const AddEmployeeSchema = EmployeeSchema.omit({
  LeaveDate: true,
  isActive: true,
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
  CreatedByReceptionistID: true,
}).extend({
  Employee: AddEmployeeSchema,
});

export const AddReceptionistSchema = ReceptionistSchema.omit({
  ID: true,
  CreatedAt: true,
  CreatedByAdminID: true,
}).extend({
  Employee: AddEmployeeSchema,
});

export const AddPatientSchema = PatientSchema.omit({
  ID: true,
  CreatedAt: true,
  CreatedByReceptionistID: true,
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
  OrderedByDoctorID: true,
});

export const AddTestAppointmentSchema = TestAppointmentSchema.omit({
  ID: true,
  ResultDate: true,
  CreatedAt: true,
  CreatedByReceptionistID: true,
  Result: true,
  Status: true,
  PaymentID: true,
});

export const AddInsuranceSchema = InsuranceSchema.omit({
  ID: true,
  isActive: true,
  CreatedAt: true,
  CreatedByReceptionistID: true,
});

export const AddAppointmentSchema = AppointmentSchema.omit({
  ID: true,
  CreatedAt: true,
  CreatedByReceptionistID: true,
  Status: true,
  PaymentID: true,
});

export const AddOperationSchema = OperationSchema.omit({
  ID: true,
  CreatedAt: true,
  CreatedByReceptionistID: true,
  Status: true,
  PaymentID: true,
});

export const AddPrescriptionSchema = PrescriptionSchema.omit({
  ID: true,
});

export const AddPaymentSchema = PaymentSchema.omit({
  ID: true,
  IsPaid: true,
});
