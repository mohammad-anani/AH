import { useOutletContext } from "react-router-dom";
import type { Doctor } from "../../../utils/models/types";
import AddUpdateForm from "@/ui/entityComponents/AddUpdateForm";
import Form from "./Form";
import { DoctorSchema } from "@/utils/models/schema/schemas";

export default function Update() {
  const { doctor } = useOutletContext<{ doctor: Doctor }>();

  return (
    <AddUpdateForm
      schema={DoctorSchema}
      defaultValues={doctor}
      title="Edit Doctor"
    >
      <Form />
    </AddUpdateForm>
  );
}
