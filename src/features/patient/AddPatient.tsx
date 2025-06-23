import PatientForm from "./PatientForm";
import AddUpdateForm from "@/ui/entityComponents/AddUpdateForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddPatientSchema } from "@/utils/models/addingSchemas";
import { emptyPatient } from "@/utils/models/emptyObjects";

export default function AddPatient() {
  return (
    <AddUpdateForm
      title="Add Patient"
      backLink="/admin/human-resources/patients"
      resolver={zodResolver(AddPatientSchema)}
      defaultValues={emptyPatient}
    >
      <PatientForm fieldPrefix="" />
    </AddUpdateForm>
  );
}
