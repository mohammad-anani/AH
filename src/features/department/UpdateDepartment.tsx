import { useOutletContext } from "react-router-dom";
import type { Department } from "../../utils/types";
import AddUpdateForm from "@/ui/AddUpdateForm";
import DepartmentForm from "./DepartmentForm";

export default function UpdateDepartment() {
  const { department } = useOutletContext<{ department: Department }>();

  return (
    <AddUpdateForm
      title="Edit Department"
      backLink={"/admin/departments/" + department.ID}
    >
      <DepartmentForm department={department} />
    </AddUpdateForm>
  );
}
