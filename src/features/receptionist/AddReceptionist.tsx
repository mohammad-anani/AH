import AddUpdateForm from "@/ui/entityComponents/AddUpdateForm";
import ReceptionistForm from "./ReceptionistForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddReceptionistSchema } from "@/utils/models/addingSchemas";
import { emptyReceptionist } from "@/utils/models/emptyObjects";

export default function AddReceptionist() {
  return (
    <AddUpdateForm
      title="Add Receptionist"
      backLink="/admin/human-resources/receptionists"
      resolver={zodResolver(AddReceptionistSchema)}
      defaultValues={emptyReceptionist}
    >
      <ReceptionistForm fieldPrefix="" />
    </AddUpdateForm>
  );
}
