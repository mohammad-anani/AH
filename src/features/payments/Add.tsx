import Form from "./Form";
import AddUpdateForm from "@/ui/entityComponents/AddUpdateForm";
import { AddPatientSchema } from "@/utils/models/addingSchemas";
import { emptyPatient } from "@/utils/models/emptyObjects";

export default function Add() {
  return (
    <AddUpdateForm
      title="Add Patient"
      backLink="/admin/human-resources/patients"
      schema={AddPatientSchema}
      defaultValues={emptyPatient}
    >
      <Form fieldPrefix="" />
    </AddUpdateForm>
  );
}
