import type { Employee } from "../../utils/types";
import { emptyEmployee } from "../../utils/emptyObjects";
import AddUpdatePerson from "../person/AddUpdatePerson";

export default function AddUpdateEmployee({
  employee = emptyEmployee,
}: {
  employee?: Employee;
}) {
  const { Salary, ShiftEnd } = employee;

  const add = employee.ID === -1;
  return (
    <>
      <AddUpdatePerson person={employee.Person} />
      <input type="text" value={!add ? Salary : ""} />
      <input type="text" value={!add ? ShiftEnd : ""} />
    </>
  );
}
