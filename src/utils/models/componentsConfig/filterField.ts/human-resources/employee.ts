// employeeFields.ts

import type { FilterKey } from "@/utils/models/types/utils/Form&Filter";
import {
  moneyField,
  dateField,
  booleanField,
  multiselectField,
  timeField,
} from "../reusableFields";
import { DepartmentSelectCallBack } from "@/features/department/departmentSelectCallback";

export const employeeFields: FilterKey[] = [
  ["Department", "custom", DepartmentSelectCallBack],
  moneyField("Salary"),
  dateField("HireDate"),
  dateField("LeaveDate"),
  booleanField("isActive", ["Active", "Not Active", "All"]),
  multiselectField("WorkingDays", [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ]),
  timeField("ShiftStart"),
  timeField("ShiftEnd"),
];
