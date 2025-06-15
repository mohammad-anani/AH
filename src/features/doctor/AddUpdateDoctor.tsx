import type { Doctor } from "../../utils/types";
import BackNavigator from "../../ui/BackNavigator";
import { emptyDoctor } from "../../utils/emptyObjects";
import AddUpdateEmployee from "../employee/AddUpdateEmployee";

export default function AddUpdateDoctor({
  doctor = emptyDoctor,
}: {
  doctor?: Doctor;
}) {
  const { ID } = doctor;

  const add = ID === -1;
  return (
    <form>
      <input type="number" value={!add ? ID : undefined} />
      <input
        type="text"
        placeholder="Specialization"
        value={doctor.Specialization}
      />

      <AddUpdateEmployee employee={doctor.Employee} />
      <BackNavigator pagesBack={1}>
        <button>Save</button>
      </BackNavigator>
    </form>
  );
}
