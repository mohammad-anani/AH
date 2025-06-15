import { useOutletContext } from "react-router-dom";
import type { Patient } from "../../utils/types";
import AddUpdateForm from "@/ui/AddUpdateForm";
import PatientForm from "./PatientForm";

export default function UpdatePatient() {
  const { patient } = useOutletContext<{ patient: Patient }>();
  const { ID } = patient;
  return (
    <AddUpdateForm
      title="Add Patient"
      backLink={"/admin/human-resources/patients/" + ID}
    >
      <PatientForm patient={patient} />
    </AddUpdateForm>
  );
}
