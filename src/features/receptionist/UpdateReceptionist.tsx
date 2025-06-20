import { useOutletContext } from "react-router-dom";
import type { Receptionist } from "../../utils/types";
import AddUpdateForm from "@/ui/AddUpdateForm";
import ReceptionistForm from "./ReceptionistForm";

export default function UpdateReceptionist() {
  const { receptionist } = useOutletContext<{ receptionist: Receptionist }>();

  return (
    <AddUpdateForm
      title="Add Admin"
      backLink={"/admin/human-resources/receptionists/" + receptionist.ID}
    >
      <ReceptionistForm receptionist={receptionist} />
    </AddUpdateForm>
  );
}
