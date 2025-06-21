import AddUpdateForm from "@/ui/AddUpdateForm";
import AdminForm from "./AdminForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { AdminSchema } from "@/utils/models/schemas";
import { emptyAdmin } from "@/utils/models/emptyObjects";

export default function AddAdmin() {
  return (
    <AddUpdateForm
      defaultValues={emptyAdmin}
      resolver={zodResolver(AdminSchema)}
      title="Add Admin"
      backLink="/admin/human-resources/admins"
    >
      <AdminForm />
    </AddUpdateForm>
  );
}
