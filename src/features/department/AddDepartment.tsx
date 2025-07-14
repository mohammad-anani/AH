import DepartmentForm from "./DepartmentForm";
import AddUpdateForm from "@/ui/entityComponents/AddUpdateForm";
import { emptyDepartment } from "@/utils/models/emptyObjects";
import { AddDepartmentSchema } from "@/utils/models/addingSchemas";

export default function AddDepartment() {
  return (
    <AddUpdateForm
      schema={AddDepartmentSchema}
      defaultValues={emptyDepartment}
      title="Add Department"
      backLink={"/admin/departments/"}
    >
      <DepartmentForm />
    </AddUpdateForm>
  );
}
