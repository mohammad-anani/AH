import { formatMoney } from "@/utils/formatters/formatMoney";
import { emptyEmployee } from "../../utils/models/emptyObjects";
import type { Employee } from "../../utils/models/types";
import PersonData from "../person/PersonData";
import Clickable from "@/ui/customComponents/Clickable";
import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import type { EmptyEmployee } from "@/utils/models/emptyObjectsTypes";

export default function EmployeeData({
  employee = emptyEmployee,
}: {
  employee?: Employee | EmptyEmployee;
}) {
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

  return (
    <>
      <PersonData person={Person} />
      <span>Department:</span>
      <span>
        <Clickable
          as="Link"
          variant="link"
          to={`/admin/departments/${DepartmentID}`}
        >
          View Department
        </Clickable>
      </span>
      <span>Salary:</span>
      <span>{formatMoney(Salary ?? 0)}</span>
      <span>Hire Date:</span>
      <span>{formatDateIsoToLocal(HireDate)}</span>
      <span>Leave Date:</span>
      <span>{LeaveDate ? formatDateIsoToLocal(LeaveDate) : "N/A"}</span>
      <span>Working Days:</span>
      <span>{formattedWorkingDays}</span>
      <span>Shift Start:</span>
      <span>{ShiftStart}</span>
      <span>Shift End:</span>
      <span>{ShiftEnd}</span>
      <span>Status:</span>
      <span>{isActive ? "Active" : "Inactive"}</span>
    </>
  );
}
