import type {
  Department,
  Patient,
  Employee,
  Receptionist,
  Doctor,
  Admin,
  TestType,
  TestOrder,
  TestAppointment,
  Insurance,
  Operation,
  Person,
  Appointment,
  Bill,
  Payment,
} from "./types";

export type typesObject = {
  Department: Department;
  Patient: Patient;
  Employee: Employee;
  Receptionist: Receptionist;
  Doctor: Doctor;
  Admin: Admin;
  TestType: TestType;
  TestOrder: TestOrder;
  TestAppointment: TestAppointment;
  Insurance: Insurance;
  Operation: Operation;
  Person: Person;
  Appointment: Appointment;
  Prescription: { ID: number };
  Bill: Bill;
  Payment: Payment;
};
