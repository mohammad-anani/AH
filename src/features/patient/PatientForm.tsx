import type { Patient } from "../../utils/types";
import { emptyPatient } from "../../utils/emptyObjects";
import PersonForm from "../person/PersonForm";

export default function PatientForm({
  patient = emptyPatient,
}: {
  patient?: Patient;
}) {
  return <PersonForm person={patient.Person} />;
}
