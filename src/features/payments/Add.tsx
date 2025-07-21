import AddUpdateForm from "@/ui/entityComponents/AddUpdateForm";
import { AddPatientSchema } from "@/utils/models/schema/addingSchemas";
import { emptyPatient } from "@/utils/models/types/emptyObjects";

export default function Add() {
  return (
    <AddUpdateForm
      title="Add Patient"
      backLink="/admin/human-resources/patients"
      schema={AddPatientSchema}
      defaultValues={emptyPatient}
    ></AddUpdateForm>
  );
}
