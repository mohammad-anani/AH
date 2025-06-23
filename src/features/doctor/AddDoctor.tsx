import { AddDoctorSchema } from "@/utils/models/addingSchemas";
import DoctorForm from "./DoctorForm";
import AddUpdateForm from "@/ui/entityComponents/AddUpdateForm";
import { emptyDoctor } from "@/utils/models/emptyObjects";
import { zodResolver } from "@hookform/resolvers/zod";

export default function AddDoctor() {
  return (
    <AddUpdateForm
      resolver={zodResolver(AddDoctorSchema)}
      defaultValues={emptyDoctor}
      title="Add Doctor"
      backLink={"/admin/human-resources/doctors/"}
    >
      <DoctorForm />
    </AddUpdateForm>
  );
}
