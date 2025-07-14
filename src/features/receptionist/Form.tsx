import EmployeeForm from "../employee/Form";

export default function Form({ fieldPrefix = "" }: { fieldPrefix?: string }) {
  const prefix = fieldPrefix + "";
  return <EmployeeForm fieldPrefix={prefix} />;
}
