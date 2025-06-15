import { formatMoney } from "@/utils/formatMoney";
import { emptyEmployee } from "../../utils/emptyObjects";
import type { Employee } from "../../utils/types";
import PersonData from "../person/PersonData";
import Clickable from "@/ui/Clickable";

export default function EmployeeData({
  employee = emptyEmployee,
}: {
  employee?: Employee;
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
      <span>{formatMoney(Salary)}</span>
      <span>Hire Date:</span>
      <span>{new Date(HireDate).toLocaleDateString()}</span>
      <span>Leave Date:</span>
      <span>
        {LeaveDate ? new Date(LeaveDate).toLocaleDateString() : "N/A"}
      </span>
      <span>Working Days:</span>
      <span>{WorkingDays.join(", ")}</span>
      <span>Shift Start:</span>
      <span>{ShiftStart}</span>
      <span>Shift End:</span>
      <span>{ShiftEnd}</span>
      <span>Status:</span>
      <span>{isActive ? "Active" : "Inactive"}</span>
    </>
  );
}
