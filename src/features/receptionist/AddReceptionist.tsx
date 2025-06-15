import { Link } from "react-router-dom";
import AddUpdateReceptionist from "./AddUpdateReceptionist";

export default function AddReceptionist() {
  return (
    <>
      <Link to="/admin/human-resources/receptionists">
        <button>Close</button>
      </Link>
      <h1>Add Receptionist</h1>
      <AddUpdateReceptionist />
    </>
  );
}
