import AddUpdateForm from "@/ui/AddUpdateForm";
import AdminForm from "./AdminForm";

export default function AddAdmin() {
  return (
    <AddUpdateForm title="Add Admin" backLink="/admin/human-resources/admins">
      <AdminForm />
    </AddUpdateForm>
  );
}
