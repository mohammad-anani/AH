import AddUpdateForm from "@/ui/entityComponents/AddUpdateForm";
import { AddTestAppointmentSchema } from "@/utils/models/schema/addingSchemas";
import { emptyTestAppointment } from "@/utils/models/emptyObjects/emptyObjects";
import Form from "./Form";

export default function Add() {
  return (
    <AddUpdateForm
      defaultValues={emptyTestAppointment}
      schema={AddTestAppointmentSchema}
      title="Add Test Appointment"
      backLink="/admin/tests/appointments"
    >
      <Form />
    </AddUpdateForm>
  );
}
