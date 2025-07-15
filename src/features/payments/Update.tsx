import { useOutletContext } from "react-router-dom";
import type { Patient } from "../../utils/models/types";
import AddUpdateForm from "@/ui/entityComponents/AddUpdateForm";
import Form from "./Form";
import { PatientSchema } from "@/utils/models/schemas";

export default function Update() {
  const { patient } = useOutletContext<{ patient: Patient }>();
  const { ID } = patient;
  return (
    <AddUpdateForm
      title="Add Patient"
      backLink={"/admin/human-resources/patients/" + ID}
      schema={PatientSchema}
      defaultValues={patient}
    >
      <Form fieldPrefix="" />
    </AddUpdateForm>
  );
}
