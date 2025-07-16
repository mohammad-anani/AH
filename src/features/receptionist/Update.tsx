import { useOutletContext } from "react-router-dom";
import type { Receptionist } from "../../utils/models/types";
import AddUpdateForm from "@/ui/entityComponents/AddUpdateForm";
import Form from "./Form";
import { ReceptionistSchema } from "@/utils/models/schemas";

export default function Update() {
  const { receptionist } = useOutletContext<{ receptionist: Receptionist }>();

  return (
    <AddUpdateForm
      title="Edit Receptionist"
      schema={ReceptionistSchema}
      defaultValues={receptionist}
    >
      <Form fieldPrefix="" />
    </AddUpdateForm>
  );
}
