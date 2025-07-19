import AddUpdateForm from "@/ui/entityComponents/AddUpdateForm";
import type { EmptyDepartment } from "@/utils/models/emptyObjectsTypes";
import { DepartmentSchema } from "@/utils/models/schema/schemas";
import type { Department } from "@/utils/models/types";
import Form from "./Form";
import { AddDepartmentSchema } from "@/utils/models/schema/addingSchemas";
import { emptyDepartment } from "@/utils/models/emptyObjects";
import { useOutletContext } from "react-router-dom";

export default function AddUpdate() {
  const department = useOutletContext<Department>();

  const isAdd = !department;

  const schema = isAdd ? AddDepartmentSchema : DepartmentSchema;
  const defaultValues = isAdd ? emptyDepartment : department;
  const title = `${isAdd ? "Add" : "Edit"} Department`;

  return (
    <AddUpdateForm schema={schema} defaultValues={defaultValues} title={title}>
      <Form />
    </AddUpdateForm>
  );
}
