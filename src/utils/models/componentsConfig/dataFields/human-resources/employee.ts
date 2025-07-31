import { formatMoney } from "@/utils/formatters/formatMoney";
import { convert24To12 } from "@/utils/formatters/convert24To12";
import { person } from "./person";
import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import type { typesObject } from "@/utils/models/types/normal/typesObject";
import type { dataFields as DataFields } from "@/utils/models/types/utils/routeTypes";

export const employee: DataFields<"Employee"> = (
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
    ...person(Person),
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
    ["Shift Start", convert24To12(ShiftStart)],
    ["Shift End", convert24To12(ShiftEnd)],
    ["Status", isActive ? "Active" : "Inactive"],
  ];
};
