import PatientForm from "./PatientForm";
import AddUpdateForm from "@/ui/AddUpdateForm";

export default function AddPatient() {
  return (
    <AddUpdateForm
      title="Add Patient"
      backLink="/admin/human-resources/patients"
    >
      <PatientForm />
    </AddUpdateForm>
  );
}
