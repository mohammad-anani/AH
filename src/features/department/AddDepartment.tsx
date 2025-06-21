import { DepartmentSchema } from "@/utils/models/schemas";
import DepartmentForm from "./DepartmentForm";
import AddUpdateForm from "@/ui/AddUpdateForm";
import { emptyDepartment } from "@/utils/models/emptyObjects";
import { zodResolver } from "@hookform/resolvers/zod";

export default function AddDepartment() {
  return (
    <AddUpdateForm
      resolver={zodResolver(DepartmentSchema)}
      defaultValues={emptyDepartment}
      title="Add Department"
      backLink={"/admin/departments/"}
    >
      <DepartmentForm />
    </AddUpdateForm>
  );
}
