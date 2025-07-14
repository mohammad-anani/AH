import { useOutletContext } from "react-router-dom";
import type { Receptionist } from "../../utils/models/types";
import AddUpdateForm from "@/ui/entityComponents/AddUpdateForm";
import ReceptionistForm from "./ReceptionistForm";
import { ReceptionistSchema } from "@/utils/models/schemas";

export default function UpdateReceptionist() {
  const { receptionist } = useOutletContext<{ receptionist: Receptionist }>();

  return (
    <AddUpdateForm
      title="Edit Receptionist"
      backLink={"/admin/human-resources/receptionists/" + receptionist.ID}
      schema={ReceptionistSchema}
      defaultValues={receptionist}
    >
      <ReceptionistForm fieldPrefix="" />
    </AddUpdateForm>
  );
}
