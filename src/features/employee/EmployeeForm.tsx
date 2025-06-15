import type { Employee } from "../../utils/types";
import { emptyEmployee } from "../../utils/emptyObjects";
import AddUpdatePerson from "../person/PersonForm";

export default function EmployeeForm({
  employee = emptyEmployee,
}: {
  employee?: Employee;
}) {
  const {
    Person,

    Salary,
    HireDate,
    LeaveDate,
    isActive,
    WorkingDays,
    ShiftStart,
    ShiftEnd,
  } = employee;

  const add = employee.ID === -1;

  return (
    <>
      <AddUpdatePerson person={Person} />

      <label htmlFor="salary">Salary:</label>
      <input
        type="number"
        name="salary"
        defaultValue={!add ? Salary : ""}
        placeholder="Salary"
      />

      <label htmlFor="hireDate">Hire Date:</label>
      <input type="date" name="hireDate" defaultValue={!add ? HireDate : ""} />

      <label htmlFor="leaveDate">Leave Date:</label>
      <input
        type="date"
        name="leaveDate"
        defaultValue={!add && LeaveDate ? LeaveDate : ""}
      />

      <label htmlFor="isActive">Status:</label>
      <select name="isActive" defaultValue={!add ? String(isActive) : ""}>
        <option value="">Select Status</option>
        <option value="true">Active</option>
        <option value="false">Inactive</option>
      </select>

      <label htmlFor="workingDays">Working Days:</label>
      <input
        type="text"
        name="workingDays"
        defaultValue={!add ? WorkingDays.join(", ") : ""}
        placeholder="e.g. Monday, Tuesday"
      />

      <label htmlFor="shiftStart">Shift Start:</label>
      <input
        type="time"
        name="shiftStart"
        defaultValue={!add ? ShiftStart : ""}
      />

      <label htmlFor="shiftEnd">Shift End:</label>
      <input type="time" name="shiftEnd" defaultValue={!add ? ShiftEnd : ""} />
    </>
  );
}
