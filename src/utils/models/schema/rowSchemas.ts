import {
  AdminSchema,
  DepartmentSchema,
  DoctorSchema,
  PatientSchema,
  ReceptionistSchema,
  TestAppointmentSchema,
  TestOrderSchema,
  TestTypeSchema,
} from "./schemas";
import { nonEmptyString } from "./reusableSchemas";
import { z } from "zod";

export const DepartmentRowSchema = DepartmentSchema.pick({
  ID: true,
  Name: true,
  Phone: true,
});

export const AdminRowSchema = AdminSchema.pick({
  ID: true,
}).extend({ Name: nonEmptyString });

export const DoctorRowSchema = DoctorSchema.pick({
  ID: true,

  Specialization: true,
}).extend({ Name: nonEmptyString });

export const PatientRowSchema = PatientSchema.pick({
  ID: true,
}).extend({ Name: nonEmptyString, Age: z.number(), Phone: nonEmptyString });

export const ReceptionistRowSchema = ReceptionistSchema.pick({
  ID: true,
}).extend({ Name: nonEmptyString });

export const TestTypeRowSchema = TestTypeSchema.pick({
  ID: true,
  Name: true,
}).extend({ DepartmentName: nonEmptyString });

export const TestOrderRowSchema = TestOrderSchema.pick({
  ID: true,
});

export const TestAppointmentRowSchema = TestAppointmentSchema.pick({
  ID: true,
  ScheduledDate: true,
}).extend({ PatientName: nonEmptyString, TeestName: nonEmptyString });
