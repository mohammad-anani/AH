import { formatMoney } from "@/utils/formatters/formatMoney";
import { convert24To12 } from "@/utils/formatters/convert24To12";
import { person } from "../person";
import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import type { typesObject } from "@/utils/models/types/normal/typesObject";
import {
  DepartmentFilterSelectCallBack,
  DepartmentFormSelectCallBack,
} from "@/features/department/departmentSelectCallback";

import {
  moneyField,
  dateField,
  multiselectField,
  timeField,
  booleanField,
} from "../../../utils/filterReusableFields";
import { prefixFields } from "../../../utils/formUtils";
import type { DisplayingConfig } from "../../../routeConfig";

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

export const employeeAudit: DisplayingConfig<"Employee"> = {
  dataFields: (employee: typesObject["Employee"]) => {
    const {
      Department,
      Salary,
      HireDate,
      LeaveDate,
      WorkingDays,
      ShiftStart,
      ShiftEnd,
    } = employee;

    const formattedWorkingDays =
      WorkingDays.length === 7
        ? "Everyday"
        : WorkingDays.length === 0
          ? "None"
          : WorkingDays.join(", ");

    return [
      [
        "Department",
        Department,
        Department ? `/admin/departments/${Department.ID}` : undefined,
        "Department",
      ],
      ["Salary", formatMoney(Salary ?? 0)],
      ["Hire Date", formatDateIsoToLocal(HireDate)],
      ["Leave Date", LeaveDate ? formatDateIsoToLocal(LeaveDate) : "N/A"],
      ["Working Days", formattedWorkingDays],
      ["Shift Start", convert24To12(ShiftStart)],
      ["Shift End", convert24To12(ShiftEnd)],
      ["Status", isActive ? "Active" : "Inactive"],
    ];
  },
  filterFields: [
    ["Department", "custom", DepartmentFilterSelectCallBack],
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
  ],
  formConfig: [
    ...prefixFields<"Employee", "Person">("Person", person["formConfig"]),
    [
      "Department",
      "Department.ID",
      "custom",
      "both",
      DepartmentFormSelectCallBack,
    ],
    ["Salary", "Salary", "money", "both"],
    ["Hire Date", "HireDate", "date", "both"],
    ["Working Days", "WorkingDays", "multiselect", "both", weekdays],
    ["Shift Start", "ShiftStart", "time", "both"],
    ["Shift End", "ShiftEnd", "time", "both"],
  ],
};
