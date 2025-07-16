import { AddDoctorSchema } from "@/utils/models/schema/addingSchemas";
import Form from "./Form";
import AddUpdateForm from "@/ui/entityComponents/AddUpdateForm";
import { emptyDoctor } from "@/utils/models/emptyObjects";

export default function Add() {
  return (
    <AddUpdateForm
      schema={AddDoctorSchema}
      defaultValues={emptyDoctor}
      title="Add Doctor"
      backLink={"/admin/human-resources/doctors/"}
    >
      <Form />
    </AddUpdateForm>
  );
}
