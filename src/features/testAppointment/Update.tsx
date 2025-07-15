import { useOutletContext } from "react-router-dom";
import type { TestAppointment } from "@/utils/models/types";
import AddUpdateForm from "@/ui/entityComponents/AddUpdateForm";
import Form from "./Form";
import { TestAppointmentSchema } from "@/utils/models/schemas";

export default function Update() {
  const { appointment } = useOutletContext<{ appointment: TestAppointment }>();
  return (
    <AddUpdateForm
      title="Edit Test Appointment"
      backLink={`/admin/tests/appointments/${appointment.ID}`}
      schema={TestAppointmentSchema}
      defaultValues={appointment}
    >
      <Form />
    </AddUpdateForm>
  );
}
