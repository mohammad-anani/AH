import { Link } from "react-router-dom";
import AddUpdatePatient from "./AddUpdatePatient";

export default function AddPatient() {
  return (
    <>
      <Link to="/admin/human-resources/patients">
        <button>Close</button>
      </Link>
      <h1>Add Patient</h1>
      <AddUpdatePatient />
    </>
  );
}
