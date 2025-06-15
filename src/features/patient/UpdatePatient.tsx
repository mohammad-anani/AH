import { Link, useOutletContext } from "react-router-dom";
import type { Patient } from "../../utils/types";
import AddUpdatePatient from "./AddUpdatePatient";

export default function UpdatePatient() {
  const { patient } = useOutletContext<{ patient: Patient }>();

  return (
    <>
      <Link to={`/admin/human-resources/patients/${patient.ID}`}>
        <button>Cancel</button>
      </Link>
      <AddUpdatePatient patient={patient} />
    </>
  );
}
