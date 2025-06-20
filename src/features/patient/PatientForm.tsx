import PersonForm from "../person/PersonForm";

export default function PatientForm({
  fieldPrefix = "",
}: {
  fieldPrefix?: string;
}) {
  const prefix = fieldPrefix + "";
  return <PersonForm fieldPrefix={prefix} />;
}
