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
