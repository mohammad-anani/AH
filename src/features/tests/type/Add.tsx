import AddUpdateForm from "@/ui/entityComponents/AddUpdateForm";
import { emptyTestType } from "@/utils/models/emptyObjects";
import { AddTestTypeSchema } from "@/utils/models/schema/addingSchemas";
import Form from "./Form";
export default function Add() {
  return (
    <AddUpdateForm
      schema={AddTestTypeSchema}
      title="Add Test Type"
      defaultValues={emptyTestType}
    >
      <Form />
    </AddUpdateForm>
  );
}
