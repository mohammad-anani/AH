import AddUpdateForm from "@/ui/entityComponents/AddUpdateForm";
import ReceptionistForm from "./Form";
import { AddReceptionistSchema } from "@/utils/models/schema/addingSchemas";
import { emptyReceptionist } from "@/utils/models/emptyObjects/emptyObjects";

export default function AddReceptionist() {
  return (
    <AddUpdateForm
      title="Add Receptionist"
      backLink="/admin/human-resources/receptionists"
      schema={AddReceptionistSchema}
      defaultValues={emptyReceptionist}
    >
      <ReceptionistForm fieldPrefix="" />
    </AddUpdateForm>
  );
}
