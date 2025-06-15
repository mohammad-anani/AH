import DoctorForm from "./DoctorForm";
import AddUpdateForm from "@/ui/AddUpdateForm";

export default function AddDoctor() {
  return (
    <AddUpdateForm
      title="Add Doctor"
      backLink={"/admin/human-resources/doctors"}
    >
      <DoctorForm />
    </AddUpdateForm>
  );
}
