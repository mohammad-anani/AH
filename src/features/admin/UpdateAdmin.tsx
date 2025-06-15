import { useOutletContext } from "react-router-dom";
import type { Admin } from "../../utils/types";
import AddUpdateForm from "@/ui/AddUpdateForm";
import AdminForm from "./AdminForm";

export default function UpdateAdmin() {
  const { admin } = useOutletContext<{ admin: Admin }>();

  return (
    <AddUpdateForm title="Add Admin" backLink="/admin/human-resources/admins">
      <AdminForm admin={admin} />
    </AddUpdateForm>
  );
}
