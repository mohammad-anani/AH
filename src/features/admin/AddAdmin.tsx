import AddUpdateForm from "@/ui/entityComponents/AddUpdateForm";
import AdminForm from "./AdminForm";
import { emptyAdmin } from "@/utils/models/emptyObjects";
import { AddAdminSchema } from "@/utils/models/addingSchemas";

export default function AddAdmin() {
  return (
    <AddUpdateForm
      defaultValues={emptyAdmin}
      schema={AddAdminSchema}
      title="Add Admin"
      backLink="/admin/human-resources/admins"
    >
      <AdminForm />
    </AddUpdateForm>
  );
}
