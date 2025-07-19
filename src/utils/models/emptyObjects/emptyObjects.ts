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
  EmptyInsurance,
  EmptyOperation,
  EmptyPrescription,
  EmptyPayment,
} from "@/utils/models/emptyObjects/emptyObjectsTypes";

const emptyNumber = null;
const emptyBoolean = null;
const emptyString = "";
const emptyDate = "";
const emptyDateTime = "";
const emptyTime = "";
const emptyArray: [] = [];

export const emptyPerson: EmptyPerson = {
  FirstName: emptyString,
  MiddleName: emptyString,
  LastName: emptyString,
  Gender: emptyBoolean,
  Age: emptyNumber,
  CountryName: emptyString,
  Phone: emptyString,
  Email: emptyString,
  Username: emptyString,
};

export const emptyDepartment: EmptyDepartment = {
  Name: emptyString,
  Phone: emptyString,
};

export const emptyPatient: EmptyPatient = {
  Person: emptyPerson,
};

export const emptyEmployee: EmptyEmployee = {
  DepartmentID: emptyNumber,
  Salary: emptyNumber,
  HireDate: emptyDate,
  WorkingDays: emptyArray,
  ShiftStart: emptyTime,
  ShiftEnd: emptyTime,
  Person: emptyPerson,
};

export const emptyReceptionist: EmptyReceptionist = {
  Employee: emptyEmployee,
};

export const emptyDoctor: EmptyDoctor = {
  Employee: emptyEmployee,
  Specialization: emptyString,
};

export const emptyAdmin: EmptyAdmin = {
  Employee: emptyEmployee,
};

export const emptyTestType: EmptyTestType = {
  DepartmentID: null,
  Name: emptyString,
  Cost: null,
};

export const emptyTestOrder: EmptyTestOrder = {
  AppointmentID: emptyNumber,
  TestTypeID: emptyNumber,
};

export const emptyTestAppointment: EmptyTestAppointment = {
  TestOrderID: emptyNumber,
  PatientID: emptyNumber,
  TestID: emptyNumber,
  ScheduledDate: emptyDateTime,
};

export const emptyInsurance: EmptyInsurance = {
  PatientID: emptyNumber,
  ProviderName: emptyString,
  Class: emptyString,
  ExpirationDate: emptyDate,
};

export const emptyOperation: EmptyOperation = {
  Name: emptyString,
  Description: emptyString,
  PatientID: emptyNumber,
  DepartmentID: emptyNumber,
  ScheduledDate: emptyDateTime,
};

export const emptyPrescription: EmptyPrescription = {
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
  Amount: emptyNumber,
  PatientPaid: emptyNumber,
  InsurancePaid: emptyNumber,
};
