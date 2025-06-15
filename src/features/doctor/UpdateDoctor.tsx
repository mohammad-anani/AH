import { Link, useOutletContext } from "react-router-dom";
import type { Doctor } from "../../utils/types";
import AddUpdateDoctor from "./AddUpdateDoctor";

export default function UpdateDoctor() {
  const { doctor } = useOutletContext<{ doctor: Doctor }>();

  return (
    <>
      <Link to={`/admin/human-resources/doctors/${doctor.ID}`}>
        <button>Cancel</button>
      </Link>
      <AddUpdateDoctor doctor={doctor} />
    </>
  );
}
