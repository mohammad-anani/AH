import type { Patient } from "../../utils/types";
import BackNavigator from "../../ui/BackNavigator";
import { emptyPatient } from "../../utils/emptyObjects";
import AddUpdatePerson from "../person/AddUpdatePerson";

export default function AddUpdatePatient({
  patient = emptyPatient,
}: {
  patient?: Patient;
}) {
  const { ID } = patient;

  const add = ID === -1;
  return (
    <form>
      <input type="number" value={!add ? ID : undefined} />

      <AddUpdatePerson person={patient.Person} />
      <BackNavigator pagesBack={1}>
        <button>Save</button>
      </BackNavigator>
    </form>
  );
}
