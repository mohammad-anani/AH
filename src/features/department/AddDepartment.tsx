import { Link } from "react-router-dom";

import AddUpdateDepartment from "./AddUpdateDepartment";

export default function AddDepartment() {
  return (
    <>
      <Link to="/admin/departments">
        <button>Close</button>
      </Link>
      <AddUpdateDepartment />
    </>
  );
}
