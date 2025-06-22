import AddUpdateForm from "@/ui/entityComponents/AddUpdateForm";
import AdminForm from "./AdminForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { emptyAdmin } from "@/utils/models/emptyObjects";
import { AddAdminSchema } from "@/utils/models/addingSchemas";

export default function AddAdmin() {
  return (
    <AddUpdateForm
      defaultValues={emptyAdmin}
      resolver={zodResolver(AddAdminSchema)}
      title="Add Admin"
      backLink="/admin/human-resources/admins"
    >
      <AdminForm />
    </AddUpdateForm>
  );
}
