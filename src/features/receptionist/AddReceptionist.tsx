import AddUpdateForm from "@/ui/AddUpdateForm";
import ReceptionistForm from "./ReceptionistForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReceptionistSchema } from "@/utils/models/schemas";
import { emptyReceptionist } from "@/utils/models/emptyObjects";

export default function AddReceptionist() {
  return (
    <AddUpdateForm
      title="Add Receptionist"
      backLink="/admin/human-resources/receptionists"
      resolver={zodResolver(ReceptionistSchema)}
      defaultValues={emptyReceptionist}
    >
      <ReceptionistForm fieldPrefix="" />
    </AddUpdateForm>
  );
}
