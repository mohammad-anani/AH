import { useOutletContext } from "react-router-dom";
import type { Receptionist } from "../../utils/models/types";
import AddUpdateForm from "@/ui/AddUpdateForm";
import ReceptionistForm from "./ReceptionistForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReceptionistSchema } from "@/utils/models/schemas";

export default function UpdateReceptionist() {
  const { receptionist } = useOutletContext<{ receptionist: Receptionist }>();

  return (
    <AddUpdateForm
      title="Add Admin"
      backLink={"/admin/human-resources/receptionists/" + receptionist.ID}
      resolver={zodResolver(ReceptionistSchema)}
      defaultValues={receptionist}
    >
      <ReceptionistForm fieldPrefix="" />
    </AddUpdateForm>
  );
}
