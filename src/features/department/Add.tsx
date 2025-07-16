import Form from "./Form";
import AddUpdateForm from "@/ui/entityComponents/AddUpdateForm";
import { emptyDepartment } from "@/utils/models/emptyObjects";
import { AddDepartmentSchema } from "@/utils/models/schema/addingSchemas";

export default function Add() {
  return (
    <AddUpdateForm
      schema={AddDepartmentSchema}
      defaultValues={emptyDepartment}
      title="Add Department"
      backLink={"/admin/departments/"}
    >
      <Form />
    </AddUpdateForm>
  );
}
