import { z } from "zod";
import { positiveNumber, nonEmptyString, datetime } from "../reusableSchemas";

// TestType schema

export const TestTypeSchema = z.object({
  ID: positiveNumber(false).refine((v) => v > 0, {
    message: "Test type ID is required.",
  }),
  DepartmentID: positiveNumber(false).refine((v) => v > 0, {
    message: "Department ID is required.",
  }),
  Name: nonEmptyString.min(2, {
    message: "Test type name must be at least 2 characters long.",
  }),
  Cost: positiveNumber(false).refine((v) => v > 0, {
    message: "Cost must be greater than zero.",
  }),
  CreatedByAdminID: positiveNumber(false).refine((v) => v > 0, {
    message: "Creator Admin ID is required.",
  }),
  CreatedAt: datetime().refine(Boolean, {
    message: "Creation date is required.",
  }),
});
// TestAppointment schema

export const TestAppointmentSchema = z.object({
  ID: positiveNumber(false).refine((v) => v > 0, {
    message: "Test appointment ID is required.",
  }),
  TestOrderID: positiveNumber(false).nullable(),
  TestID: positiveNumber(false).refine((v) => v > 0, {
    message: "Test ID is required.",
  }),
  PatientID: positiveNumber(false).refine((v) => v > 0, {
    message: "Patient ID is required.",
  }),
  ScheduledDate: datetime().refine(Boolean, {
    message: "Scheduled date and time is required.",
  }),
  Status: nonEmptyString,
  Result: nonEmptyString.nullable(),
  ResultDate: datetime().nullable(),
  PaymentID: positiveNumber(false).refine((v) => v > 0, {
    message: "Payment ID is required.",
  }),
  CreatedByReceptionistID: positiveNumber(false).refine((v) => v > 0, {
    message: "Receptionist ID is required.",
  }),
  CreatedAt: datetime().refine(Boolean, {
    message: "Creation date is required.",
  }),
});
// TestOrder schema

export const TestOrderSchema = z.object({
  ID: positiveNumber(false).refine((v) => v > 0, {
    message: "Test order ID is required.",
  }),
  AppointmentID: positiveNumber(false).refine((v) => v > 0, {
    message: "Appointment ID is required.",
  }),
  TestTypeID: positiveNumber(false).refine((v) => v > 0, {
    message: "Test type ID is required.",
  }),
});
