import DepartmentSelect from "@/features/department/DepartmentSelect";
import type { customFilterProps, Key, Setter } from "./types/util";

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
  [
    "Department",
    "custom",
    [
      ({ field, onChange }: customFilterProps) => {
        return (
          <DepartmentSelect
            departmentID={field as number}
            setDepartmentID={onChange as Setter<number>}
          />
        );
      },
      "number",
    ],
  ],
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
