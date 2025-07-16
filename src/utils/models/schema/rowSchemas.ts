import {
  AdminSchema,
  DepartmentSchema,
  DoctorSchema,
  PatientSchema,
  ReceptionistSchema,
  TestOrderSchema,
  TestTypeSchema,
} from "./schemas";

export const DepartmentRowSchema = DepartmentSchema.pick({
  ID: true,
  Name: true,
  Phone: true,
});

export const AdminRowSchema = AdminSchema.pick({
  ID: true,
  Employee: true,
});

export const DoctorRowSchema = DoctorSchema.pick({
  ID: true,
  Employee: true,
  Specialization: true,
});

export const PatientRowSchema = PatientSchema.pick({
  ID: true,
  Person: true,
});

export const ReceptionistRowSchema = ReceptionistSchema.pick({
  ID: true,
  Employee: true,
});

export const TestTypeRowSchema = TestTypeSchema.pick({
  ID: true,
  Name: true,
  Cost: true,
});

export const TestOrderRowSchema = TestOrderSchema.pick({
  ID: true,
  TestTypeID: true,
  OrderedAt: true,
});
