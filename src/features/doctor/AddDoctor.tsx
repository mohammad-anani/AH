import { Link } from "react-router-dom";
import AddUpdateDoctor from "./AddUpdateDoctor";

export default function AddDoctor() {
  return (
    <>
      <Link to="/admin/human-resources/doctors">
        <button>Close</button>
      </Link>
      <h1>Add Doctor</h1>
      <AddUpdateDoctor />
    </>
  );
}
