import AddUpdateForm from "@/ui/entityComponents/AddUpdateForm";
import Form from "./Form";
import { emptyAdmin } from "@/utils/models/emptyObjects";
import { AddAdminSchema } from "@/utils/models/addingSchemas";

export default function Add() {
  return (
    <AddUpdateForm
      defaultValues={emptyAdmin}
      schema={AddAdminSchema}
      title="Add Admin"
      backLink="/admin/human-resources/admins"
    >
      <Form />
    </AddUpdateForm>
  );
}
