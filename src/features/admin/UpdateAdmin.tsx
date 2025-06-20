import { useOutletContext } from "react-router-dom";
import type { Admin } from "../../utils/types";
import AddUpdateForm from "@/ui/AddUpdateForm";
import AdminForm from "./AdminForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { AdminSchema } from "@/utils/schemas";

export default function UpdateAdmin() {
  const { admin } = useOutletContext<{ admin: Admin }>();

  return (
    <AddUpdateForm
      defaultValues={admin}
      resolver={zodResolver(AdminSchema)}
      title="Update Admin"
      backLink={"/admin/human-resources/admins/" + admin.ID}
    >
      <AdminForm />
    </AddUpdateForm>
  );
}
