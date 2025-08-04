import { formatMoney } from "@/utils/formatters/formatMoney";
import { convert24To12 } from "@/utils/formatters/convert24To12";
import { person } from "./person";
import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import type { typesObject } from "@/utils/models/types/normal/typesObject";
import { DepartmentSelectCallBack } from "@/features/department/departmentSelectCallback";

import type { DisplayingConfig } from "../../../routeConfig";

import {
  moneyField,
  dateField,
  multiselectField,
  timeField,
  booleanField,
} from "../../../utils/filterReusableFields";

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

export const employee: DisplayingConfig<"Employee"> = {
  dataFields: (employee: typesObject["Employee"]) => {
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
      ...person["dataFields"](Person),
      [
        "Department",
        "View Department",
        `/receptionist/departments/${DepartmentID}`,
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
  ],
  formConfig: [],
  selectorConfig: { selectedDisplay: () => "", path: "" },
};
