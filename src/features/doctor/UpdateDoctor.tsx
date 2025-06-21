import { useOutletContext } from "react-router-dom";
import type { Doctor } from "../../utils/models/types";
import AddUpdateForm from "@/ui/entityComponents/AddUpdateForm";
import DoctorForm from "./DoctorForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { DoctorSchema } from "@/utils/models/schemas";

export default function UpdateDoctor() {
  const { doctor } = useOutletContext<{ doctor: Doctor }>();

  return (
    <AddUpdateForm
      resolver={zodResolver(DoctorSchema)}
      defaultValues={doctor}
      title="Edit Doctor"
      backLink={"/admin/human-resources/doctors/" + doctor.ID}
    >
      <DoctorForm />
    </AddUpdateForm>
  );
}
