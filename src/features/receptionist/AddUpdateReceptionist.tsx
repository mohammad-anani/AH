import type { Receptionist } from "../../utils/types";
import BackNavigator from "../../ui/BackNavigator";
import { emptyReceptionist } from "../../utils/emptyObjects";
import AddUpdateEmployee from "../employee/AddUpdateEmployee";

export default function AddUpdateReceptionist({
  receptionist = emptyReceptionist,
}: {
  receptionist?: Receptionist;
}) {
  const { ID } = receptionist;

  const add = ID === -1;
  return (
    <form>
      <input type="number" value={!add ? ID : undefined} />

      <AddUpdateEmployee employee={receptionist.Employee} />
      <BackNavigator pagesBack={1}>
        <button>Save</button>
      </BackNavigator>
    </form>
  );
}
