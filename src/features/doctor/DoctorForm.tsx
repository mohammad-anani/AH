import type { Doctor } from "../../utils/types";
import BackNavigator from "../../ui/BackNavigator";
import { emptyDoctor } from "../../utils/emptyObjects";
import AddUpdateEmployee from "../employee/EmployeeForm";
import EmployeeForm from "../employee/EmployeeForm";

export default function DoctorForm({
  doctor = emptyDoctor,
}: {
  doctor?: Doctor;
}) {
  const { ID } = doctor;

  const add = ID === -1;
  return (
    <>
      <EmployeeForm employee={doctor.Employee} />
      <label htmlFor="specialization">Specialization:</label>
      <input
        type="text"
        name="specialization"
        defaultValue={!add ? doctor.Specialization : ""}
        placeholder="Specialization"
      />
    </>
  );
}
