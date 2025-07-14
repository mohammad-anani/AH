import { useOutletContext } from "react-router-dom";
import type { Doctor } from "../../utils/models/types";
import AddUpdateForm from "@/ui/entityComponents/AddUpdateForm";
import Form from "./Form";
import { DoctorSchema } from "@/utils/models/schemas";

export default function Update() {
  const { doctor } = useOutletContext<{ doctor: Doctor }>();

  return (
    <AddUpdateForm
      schema={DoctorSchema}
      defaultValues={doctor}
      title="Edit Doctor"
      backLink={"/admin/human-resources/doctors/" + doctor.ID}
    >
      <Form />
    </AddUpdateForm>
  );
}
