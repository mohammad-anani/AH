import type {
  EmptyPerson,
  EmptyDepartment,
  EmptyPatient,
  EmptyEmployee,
  EmptyReceptionist,
  EmptyDoctor,
  EmptyAdmin,
} from "@/utils/models/emptyObjectsTypes";

const emptyNumber = null;
const emptyBoolean = null;
const emptyString = "";
const emptyDate = "0000-00-00";
const emptyDateTime = "0000";
const emptyArray: string[] = [];
const emptyNullable = null;

export const emptyPerson: EmptyPerson = {
  ID: emptyNumber,
  FirstName: emptyString,
  MiddleName: emptyString,
  LastName: emptyString,
  Gender: emptyString,
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
