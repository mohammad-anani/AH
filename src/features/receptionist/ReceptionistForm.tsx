import EmployeeForm from "../employee/EmployeeForm";

export default function ReceptionistForm({
  fieldPrefix = "",
}: {
  fieldPrefix?: string;
}) {
  const prefix = fieldPrefix + "";
  return <EmployeeForm fieldPrefix={prefix} />;
}
