import { useOutletContext } from "react-router-dom";
import type { Department } from "../../utils/models/types";
import AddUpdateForm from "@/ui/entityComponents/AddUpdateForm";
import DepartmentForm from "./DepartmentForm";
import { DepartmentSchema } from "@/utils/models/schemas";

export default function UpdateDepartment() {
  const { department } = useOutletContext<{ department: Department }>();

  return (
    <AddUpdateForm
      schema={DepartmentSchema}
      defaultValues={department}
      title="Edit Department"
      backLink={"/admin/departments/"}
    >
      <DepartmentForm />
    </AddUpdateForm>
  );
}
