import { useOutletContext } from "react-router-dom";
import type { Doctor } from "../../utils/types";
import AddUpdateForm from "@/ui/AddUpdateForm";
import DoctorForm from "./DoctorForm";

export default function UpdateDoctor() {
  const { doctor } = useOutletContext<{ doctor: Doctor }>();

  return (
    <AddUpdateForm
      title="Add Doctor"
      backLink={"/admin/human-resources/doctors"}
    >
      <DoctorForm doctor={doctor} />
    </AddUpdateForm>
  );
}
