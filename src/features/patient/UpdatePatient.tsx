import { useOutletContext } from "react-router-dom";
import type { Patient } from "../../utils/models/types";
import AddUpdateForm from "@/ui/entityComponents/AddUpdateForm";
import PatientForm from "./PatientForm";
import { PatientSchema } from "@/utils/models/schemas";

export default function UpdatePatient() {
  const { patient } = useOutletContext<{ patient: Patient }>();
  const { ID } = patient;
  return (
    <AddUpdateForm
      title="Add Patient"
      backLink={"/admin/human-resources/patients/" + ID}
      schema={PatientSchema}
      defaultValues={patient}
    >
      <PatientForm fieldPrefix="" />
    </AddUpdateForm>
  );
}
