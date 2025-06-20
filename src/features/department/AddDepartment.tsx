import { DepartmentSchema } from "@/utils/schemas";
import DepartmentForm from "./DepartmentForm";
import AddUpdateForm from "@/ui/AddUpdateForm";
import { emptyDepartment } from "@/utils/emptyObjects";
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
