import { Link, useOutletContext } from "react-router-dom";
import type { Admin } from "../../utils/types";
import AddUpdateAdmin from "./AddUpdateAdmin";

export default function UpdateAdmin() {
  const { admin } = useOutletContext<{ admin: Admin }>();

  return (
    <>
      <Link to={`/admin/human-resources/admins/${admin.ID}`}>
        <button>Cancel</button>
      </Link>
      <AddUpdateAdmin admin={admin} />
    </>
  );
}
