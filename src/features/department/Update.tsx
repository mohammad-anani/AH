import { useOutletContext } from "react-router-dom";
import type { Department } from "../../utils/models/types";
import AddUpdateForm from "@/ui/entityComponents/AddUpdateForm";
import Form from "./Form";
import { DepartmentSchema } from "@/utils/models/schema/schemas";

export default function Update() {
  const { department } = useOutletContext<{ department: Department }>();

  return (
    <AddUpdateForm
      schema={DepartmentSchema}
      defaultValues={department}
      title="Edit Department"
    >
      <Form />
    </AddUpdateForm>
  );
}
