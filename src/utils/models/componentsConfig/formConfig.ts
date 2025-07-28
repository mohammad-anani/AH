import { DepartmentSelectCallBack } from "@/features/department/departmentSelectCallback";
import type { typesObject } from "../types/typesObject";
import type {
  AllEntityKeys,
  DotAccess,
  EntityKey,
  FormKey,
} from "../types/util";
import { CountrySelectCallBack } from "@/features/Country/CountrySelectCallback";

const personFields: FormKey<"Person">[] = [
  ["First Name", "FirstName", "string", "both"],
  ["Middle Name", "MiddleName", "string", "both"],
  ["Last Name", "LastName", "string", "both"],
  ["Birth Date", "DateOfBirth", "date", "both"],
  ["Gender", "Gender", "boolean", "both", ["Male", "Female", "None"]],
  ["Country", "Country.ID", "custom", "both", CountrySelectCallBack],
  ["Phone", "Phone", "phone", "both"],
  ["Email", "Email", "string", "both"],
  ["Username", "Username", "string", "both"],
];

const employeeFields: FormKey<"Employee">[] = [
  ...prefixFields<"Employee", "Person">("Person", personFields),
  ["Department", "DepartmentID", "custom", "both", DepartmentSelectCallBack],
  ["Salary", "Salary", "money", "both"],
  ["Hire Date", "HireDate", "date", "both"],
  [
    "Working Days",
    "WorkingDays",
    "multiselect",
    "both",
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
  ["Shift Start", "ShiftStart", "time", "both"],
  ["Shift End", "ShiftEnd", "time", "both"],
  ["Active", "isActive", "boolean", "update", ["Active", "Not Active", "None"]],
];

export const formConfig: {
  [K in EntityKey]: FormKey<K>[];
} = {
  Admin: [...prefixFields<"Admin", "Employee">("Employee", employeeFields)],
  Doctor: [
    ...prefixFields<"Doctor", "Employee">("Employee", employeeFields),
    ["Specialization", "Specialization", "string", "both"],
  ],
  Receptionist: [
    ...prefixFields<"Receptionist", "Employee">("Employee", employeeFields),
  ],
  Patient: [...prefixFields<"Patient", "Person">("Person", personFields)],
  Department: [
    ["Name", "Name", "string", "both"],
    ["Phone", "Phone", "phone", "both"],
  ],
  TestType: [
    ["Name", "Name", "string", "both"],
    ["Department", "DepartmentID", "custom", "both", DepartmentSelectCallBack],
    ["Cost", "Cost", "money", "both"],
  ],
  // Add other entities as needed
};

//edit names

function prefixFields<T extends AllEntityKeys, B extends AllEntityKeys = T>(
  prefix: string,
  baseFields: FormKey<B>[],
): FormKey<T>[] {
  return baseFields.map(([label, fieldKey, type, mode, ...rest]) => [
    label,
    `${prefix}.${fieldKey}` as DotAccess<typesObject[T]>, // make sure DotAccess is used here
    type,
    mode,
    ...rest,
  ]);
}
