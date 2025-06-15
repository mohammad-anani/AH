import DepartmentForm from "./DepartmentForm";
import AddUpdateForm from "@/ui/AddUpdateForm";

export default function AddDepartment() {
  return (
    <AddUpdateForm title="Add Department" backLink={"/admin/departments/"}>
      <DepartmentForm />
    </AddUpdateForm>
  );
}
