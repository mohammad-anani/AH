import type { Admin } from "../../utils/types";
import BackNavigator from "../../ui/BackNavigator";
import { emptyAdmin } from "../../utils/emptyObjects";
import AddUpdateEmployee from "../employee/AddUpdateEmployee";

export default function AddUpdateAdmin({
  admin = emptyAdmin,
}: {
  admin?: Admin;
}) {
  const { ID } = admin;

  const add = ID === -1;
  return (
    <form>
      <input type="number" value={!add ? ID : undefined} />

      <AddUpdateEmployee employee={admin.Employee} />
      <BackNavigator pagesBack={1}>
        <button>Save</button>
      </BackNavigator>
    </form>
  );
}
