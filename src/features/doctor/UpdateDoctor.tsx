import { useOutletContext } from "react-router-dom";
import type { Doctor } from "../../utils/models/types";
import AddUpdateForm from "@/ui/entityComponents/AddUpdateForm";
import DoctorForm from "./DoctorForm";
import { DoctorSchema } from "@/utils/models/schemas";

export default function UpdateDoctor() {
  const { doctor } = useOutletContext<{ doctor: Doctor }>();

  return (
    <AddUpdateForm
      schema={DoctorSchema}
      defaultValues={doctor}
      title="Edit Doctor"
      backLink={"/admin/human-resources/doctors/" + doctor.ID}
    >
      <DoctorForm />
    </AddUpdateForm>
  );
}
