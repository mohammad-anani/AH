import type {
  Admin,
  Department,
  Doctor,
  Employee,
  Patient,
  Person,
  Receptionist,
} from "./types";

export const emptyDepartment: Department = {
  ID: -1,
  Name: "",
  Phone: "",
  CreatedByAdminID: -1,
  CreatedAt: "",
};

export const emptyPerson: Person = {
  ID: -1,
  FirstName: "",
  MiddleName: "",
  LastName: "",
  Gender: "",
  Age: 0,
  CountryName: "",
  Phone: "",
  Email: "",
  Username: "",
};

export const emptyPatient: Patient = {
  ID: -1,
  CreatedByReceptionistID: -1,
  CreatedAt: "0000",
  Person: emptyPerson,
};

export const emptyEmployee: Employee = {
  ID: 0,
  DepartmentID: 0,
  Salary: 0,
  HireDate: "",
  LeaveDate: null,
  isActive: false,
  WorkingDays: [],
  ShiftStart: "",
  ShiftEnd: "",
  Person: emptyPerson,
};

export const emptyReceptionist: Receptionist = {
  ID: -1,
  Employee: emptyEmployee,
  CreatedByAdminID: -1,
  CreatedAt: "",
};

export const emptyDoctor: Doctor = {
  ID: -1,
  Employee: emptyEmployee,
  Specialization: "",
  CreatedByReceptionistID: -1,
  CreatedAt: "",
};

export const emptyAdmin: Admin = {
  ID: -1,
  Employee: emptyEmployee,
  CreatedByAdminID: -1,
  CreatedAt: "",
};

// "Insurances": [
//   {
//     "ID": 1,
//     "ProviderName": "HealthCare Plus",
//     "Class": "A1",
//     "ExpirationDate": "2025-12-31"
//   },
//   {
//     "ID": 2,
//     "ProviderName": "MedSecure",
//     "Class": "B2",
//     "ExpirationDate": "2024-11-30"
//   },
//   {
//     "ID": 3,
//     "ProviderName": "WellnessCorp",
//     "Class": "A1",
//     "ExpirationDate": "2025-06-15"
//   },
//   {
//     "ID": 4,
//     "ProviderName": "SafeHealth",
//     "Class": "C3",
//     "ExpirationDate": "2023-09-30"
//   },
//   {
//     "ID": 5,
//     "ProviderName": "PrimeCare",
//     "Class": "B1",
//     "ExpirationDate": "2026-01-01"
//   }
// ],
