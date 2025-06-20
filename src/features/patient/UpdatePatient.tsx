import { useOutletContext } from "react-router-dom";
import type { Patient } from "../../utils/types";
import AddUpdateForm from "@/ui/AddUpdateForm";
import PatientForm from "./PatientForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { PatientSchema } from "@/utils/schemas";

export default function UpdatePatient() {
  const { patient } = useOutletContext<{ patient: Patient }>();
  const { ID } = patient;
  return (
    <AddUpdateForm
      title="Add Patient"
      backLink={"/admin/human-resources/patients/" + ID}
      resolver={zodResolver(PatientSchema)}
      defaultValues={patient}
    >
      <PatientForm fieldPrefix="" />
    </AddUpdateForm>
  );
}
