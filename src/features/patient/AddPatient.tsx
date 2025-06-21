import PatientForm from "./PatientForm";
import AddUpdateForm from "@/ui/AddUpdateForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { PatientSchema } from "@/utils/models/schemas";
import { emptyPatient } from "@/utils/models/emptyObjects";

export default function AddPatient() {
  return (
    <AddUpdateForm
      title="Add Patient"
      backLink="/admin/human-resources/patients"
      resolver={zodResolver(PatientSchema)}
      defaultValues={emptyPatient}
    >
      <PatientForm fieldPrefix="" />
    </AddUpdateForm>
  );
}
