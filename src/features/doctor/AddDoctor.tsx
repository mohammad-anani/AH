import { DoctorSchema } from "@/utils/models/schemas";
import DoctorForm from "./DoctorForm";
import AddUpdateForm from "@/ui/AddUpdateForm";
import { emptyDoctor } from "@/utils/models/emptyObjects";
import { zodResolver } from "@hookform/resolvers/zod";

export default function AddDoctor() {
  return (
    <AddUpdateForm
      resolver={zodResolver(DoctorSchema)}
      defaultValues={emptyDoctor}
      title="Add Doctor"
      backLink={"/admin/human-resources/doctors/"}
    >
      <DoctorForm />
    </AddUpdateForm>
  );
}
