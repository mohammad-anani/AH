import { Link, useOutletContext } from "react-router-dom";
import type { Receptionist } from "../../utils/types";
import AddUpdateReceptionist from "./AddUpdateReceptionist";

export default function UpdateReceptionist() {
  const { receptionist } = useOutletContext<{ receptionist: Receptionist }>();

  return (
    <>
      <Link to={`/admin/human-resources/receptionists/${receptionist.ID}`}>
        <button>Cancel</button>
      </Link>
      <AddUpdateReceptionist receptionist={receptionist} />
    </>
  );
}
