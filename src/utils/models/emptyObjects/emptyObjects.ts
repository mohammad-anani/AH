/* eslint-disable @typescript-eslint/no-explicit-any */
import type {
  EmptyPerson,
  EmptyDepartment,
  EmptyPatient,
  EmptyEmployee,
  EmptyReceptionist,
  EmptyDoctor,
  EmptyAdmin,
  EmptyTestType,
  EmptyTestOrder,
  EmptyTestAppointment,
  EmptyCountry,
  EmptyInsurance,
  EmptyOperation,
  EmptyPrescription,
  EmptyPayment,
} from "@/utils/models/emptyObjects/emptyObjectsTypes";

const emptyNumber = null;
const emptyBoolean = null;
const emptyString = "";
const emptyDate = "0000-00-00";
const emptyDateTime = "0000";
const emptyArray: any[] = [];
const emptyNullable = null;

export const emptyPerson: EmptyPerson = {
  ID: emptyNumber,
  FirstName: emptyString,
  MiddleName: emptyString,
  LastName: emptyString,
  Gender: emptyNumber, // should be null
  Age: emptyNumber,
  CountryName: emptyString,
  Phone: emptyString,
  Email: emptyString,
  Username: emptyString,
};

export const emptyDepartment: EmptyDepartment = {
  ID: emptyNumber,
  Name: emptyString,
  Phone: emptyString,
  CreatedByAdminID: emptyNumber,
  CreatedAt: emptyString,
};

export const emptyPatient: EmptyPatient = {
  ID: emptyNumber,
  CreatedByReceptionistID: emptyNumber,
  CreatedAt: emptyDateTime,
  Person: emptyPerson,
};

export const emptyEmployee: EmptyEmployee = {
  ID: emptyNumber,
  DepartmentID: emptyNumber,
  Salary: emptyNumber,
  HireDate: emptyDate,
  LeaveDate: emptyNullable,
  isActive: emptyBoolean,
  WorkingDays: emptyArray,
  ShiftStart: emptyString,
  ShiftEnd: emptyString,
  Person: emptyPerson,
};

export const emptyReceptionist: EmptyReceptionist = {
  ID: emptyNumber,
  Employee: emptyEmployee,
  CreatedByAdminID: emptyNumber,
  CreatedAt: emptyString,
};

export const emptyDoctor: EmptyDoctor = {
  ID: emptyNumber,
  Employee: emptyEmployee,
  Specialization: emptyString,
  CreatedByReceptionistID: emptyNumber,
  CreatedAt: emptyString,
};

export const emptyAdmin: EmptyAdmin = {
  ID: emptyNumber,
  Employee: emptyEmployee,
  CreatedByAdminID: emptyNumber,
  CreatedAt: emptyString,
};

export const emptyTestType: EmptyTestType = {
  ID: null,
  DepartmentID: null,
  Name: emptyString,
  Cost: null,
  CreatedByAdminID: null,
  CreatedAt: emptyDateTime,
};

export const emptyTestOrder: EmptyTestOrder = {
  ID: emptyNumber,
  AppointmentID: emptyNumber,
  TestTypeID: emptyNumber,
  OrderedByDoctorID: emptyNumber,
  OrderedAt: emptyDateTime,
};

export const emptyTestAppointment: EmptyTestAppointment = {
  ID: emptyNumber,
  TestOrderID: emptyNumber,
  PatientID: emptyNumber,
  TestID: emptyNumber,
  ScheduledDate: emptyDateTime,
  Status: emptyString,
  Result: emptyString,
  ResultDate: emptyDateTime,
  PaymentID: emptyNumber,
  CreatedByReceptionistID: emptyNumber,
  CreatedAt: emptyDateTime,
};

export const emptyCountry: EmptyCountry = {
  ID: emptyNumber,
  Name: emptyString,
};

export const emptyInsurance: EmptyInsurance = {
  ID: emptyNumber,
  PatientID: emptyNumber,
  ProviderName: emptyString,
  Class: emptyString,
  ExpirationDate: emptyDate,
  CreatedByReceptionistID: emptyNumber,
  CreatedAt: emptyDateTime,
};

export const emptyOperation: EmptyOperation = {
  ID: emptyNumber,
  Name: emptyString,
  Description: emptyString,
  PatientID: emptyNumber,
  DepartmentID: emptyNumber,
  ScheduledDate: emptyDateTime,
  Status: emptyString,
  PaymentID: emptyNumber,
  CreatedByReceptionistID: emptyNumber,
  CreatedAt: emptyDateTime,
};

export const emptyPrescription: EmptyPrescription = {
  ID: emptyNumber,
  AppointmentID: emptyNumber,
  Diagnosis: emptyString,
  Medication: emptyString,
  Dosage: emptyString,
  Frequency: emptyString,
  MedicationStart: emptyDate,
  MedicationEnd: emptyDate,
  Notes: emptyString,
};

export const emptyPayment: EmptyPayment = {
  ID: emptyNumber,
  Amount: emptyNumber,
  PatientPaid: emptyNumber,
  InsurancePaid: emptyNumber,
  IsPaid: emptyBoolean,
};
