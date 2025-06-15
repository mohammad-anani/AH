import AddUpdateForm from "@/ui/AddUpdateForm";
import ReceptionistForm from "./ReceptionistForm";

export default function AddReceptionist() {
  return (
    <AddUpdateForm
      title="Add Receptionist"
      backLink="/admin/human-resources/receptionists"
    >
      <ReceptionistForm />
    </AddUpdateForm>
  );
}
