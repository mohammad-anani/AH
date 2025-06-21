import { useOutletContext } from "react-router-dom";
import type { Admin } from "../../utils/models/types";
import AddUpdateForm from "@/ui/entityComponents/AddUpdateForm";
import AdminForm from "./AdminForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { AdminSchema } from "@/utils/models/schemas";

export default function UpdateAdmin() {
  const { admin } = useOutletContext<{ admin: Admin }>();

  return (
    <AddUpdateForm
      defaultValues={admin}
      resolver={zodResolver(AdminSchema)}
      title="Edit Admin"
      backLink={"/admin/human-resources/admins/" + admin.ID}
    >
      <AdminForm />
    </AddUpdateForm>
  );
}
