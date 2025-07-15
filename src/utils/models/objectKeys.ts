import type { Key } from "./types";

export const persondFields: Key[] = [
  ["FirstName", "string"],
  ["MiddleName", "string"],
  ["LastName", "string"],
  ["Gender", "boolean", ["Male", "Female"]],
  ["Age", "number"],
  ["Phone", "phone"],
  ["Email", "string"],
  ["CountryName", "string"],
  ["Username", "string"],
];

export const employeeFields: Key[] = [
  ["DepartmentID", "number"],
  ["Salary", "money"],
  ["HireDate", "date"],
  ["LeaveDate", "date"],
  ["isActive", "boolean", ["Active", "Not Active"]],
  [
    "WorkingDays",
    "array",
    [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  ],
  ["ShiftStart", "time"],
  ["ShiftEnd", "time"],
];
