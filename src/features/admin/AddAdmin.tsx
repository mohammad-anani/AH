import { Link } from "react-router-dom";
import AddUpdateAdmin from "./AddUpdateAdmin";

export default function AddAdmin() {
  return (
    <>
      <Link to="/admin/human-resources/admins">
        <button>Close</button>
      </Link>
      <h1>Add Admin</h1>
      <AddUpdateAdmin />
    </>
  );
}
