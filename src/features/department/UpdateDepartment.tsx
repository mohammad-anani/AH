import { useOutletContext } from "react-router-dom";
import type { Department } from "../../utils/types";
import AddUpdateForm from "@/ui/AddUpdateForm";
import DepartmentForm from "./DepartmentForm";
import { DepartmentSchema } from "@/utils/schemas";
import { zodResolver } from "@hookform/resolvers/zod";

export default function UpdateDepartment() {
  const { department } = useOutletContext<{ department: Department }>();

  return (
    <AddUpdateForm
      resolver={zodResolver(DepartmentSchema)}
      defaultValues={department}
      title="Edit Department"
      backLink={"/admin/departments/"}
    >
      <DepartmentForm />
    </AddUpdateForm>
  );
}
