import type { Receptionist } from "../../utils/types";
import { emptyReceptionist } from "../../utils/emptyObjects";
import EmployeeForm from "../employee/EmployeeForm";

export default function ReceptionistForm({
  receptionist = emptyReceptionist,
}: {
  receptionist?: Receptionist;
}) {
  return <EmployeeForm employee={receptionist.Employee} />;
}
