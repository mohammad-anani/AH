import { useOutletContext } from "react-router-dom";
import type { Patient } from "../../utils/models/types";
import AddUpdateForm from "@/ui/entityComponents/AddUpdateForm";
import Form from "./Form";
import { PatientSchema } from "@/utils/models/schemas";

export default function Update() {
  const { patient } = useOutletContext<{ patient: Patient }>();

  return (
    <AddUpdateForm
      title="Edit Patient"
      schema={PatientSchema}
      defaultValues={patient}
    >
      <Form fieldPrefix="" />
    </AddUpdateForm>
  );
}
