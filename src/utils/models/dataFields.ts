import type { Primitive } from "zod";
import formatDateIsoToLocal from "../formatters/formatDateIsoToLocal";
import { formatMoney } from "../formatters/formatMoney";
import formatPhoneNumber from "../formatters/formatPhoneNumber";
import type { typesObject } from "./types/typesObject";
import type { EntityKey } from "./types/util";
export const personDataFields: (
  person: typesObject["Person"],
) => [label: string, value: Primitive, link?: string, entity?: EntityKey][] = (
  person: typesObject["Person"],
) => [
  [
    "Full Name",
    `${person.FirstName} ${person.MiddleName} ${person.LastName}`.trim(),
  ],
  ["Gender", person.Gender ? "Female" : "Male"],
  ["Age", person.Age],
  ["Country", person.CountryName],
  ["Phone", formatPhoneNumber(person.Phone)],
  ["Email", person.Email],
  ["Username", person.Username],
];

export const employeeDataFields: (
  employee: typesObject["Employee"],
) => [label: string, value: Primitive, link?: string, entity?: EntityKey][] = (
  employee: typesObject["Employee"],
) => {
  const {
    Person,
    DepartmentID,
    Salary,
    HireDate,
    LeaveDate,
    WorkingDays,
    ShiftStart,
    ShiftEnd,
    isActive,
  } = employee;

  const formattedWorkingDays =
    WorkingDays.length === 7
      ? "Everyday"
      : WorkingDays.length === 0
        ? "None"
        : WorkingDays.join(", ");

  return [
    ...personDataFields(Person),
    [
      "Department",
      "View Department",
      `/admin/departments/${DepartmentID}`,
      "Department",
    ],
    ["Salary", formatMoney(Salary ?? 0)],
    ["Hire Date", formatDateIsoToLocal(HireDate)],
    ["Leave Date", LeaveDate ? formatDateIsoToLocal(LeaveDate) : "N/A"],
    ["Working Days", formattedWorkingDays],
    ["Shift Start", ShiftStart],
    ["Shift End", ShiftEnd],
    ["Status", isActive ? "Active" : "Inactive"],
  ];
};
