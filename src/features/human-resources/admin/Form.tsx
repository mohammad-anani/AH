import EntityForm from "@/ui/entityComponents/Form";
import EmployeeForm from "../employee/Form";

export default function Form() {
  return (
    <EntityForm
      entity="Admin"
      fields={[["First Name", "Employee.Person.FirstName", "string", "both"]]}
      mode="add"
    />
  );

  return <EmployeeForm />;
}
