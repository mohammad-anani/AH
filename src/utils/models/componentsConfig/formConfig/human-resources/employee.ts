import { DepartmentSelectCallBack } from "@/features/department/departmentSelectCallback";
import type { FormKey } from "@/utils/models/types/utils/Form&Filter";
import { personForm } from "./person";
import { prefixFields } from "../util";

export const weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const statusLabels = ["Active", "Inactive"];

export const employeeForm: FormKey<"Employee">[] = [
  ...prefixFields<"Employee", "Person">("Person", personForm),
  ["Department", "DepartmentID", "custom", "both", DepartmentSelectCallBack],
  ["Salary", "Salary", "money", "both"],
  ["Hire Date", "HireDate", "date", "both"],
  ["Working Days", "WorkingDays", "multiselect", "both", weekdays],
  ["Shift Start", "ShiftStart", "time", "both"],
  ["Shift End", "ShiftEnd", "time", "both"],
  ["Status", "isActive", "boolean", "update", statusLabels],
];
