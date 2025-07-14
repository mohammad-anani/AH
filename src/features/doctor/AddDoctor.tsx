import { AddDoctorSchema } from "@/utils/models/addingSchemas";
import DoctorForm from "./DoctorForm";
import AddUpdateForm from "@/ui/entityComponents/AddUpdateForm";
import { emptyDoctor } from "@/utils/models/emptyObjects";

export default function AddDoctor() {
  return (
    <AddUpdateForm
      schema={AddDoctorSchema}
      defaultValues={emptyDoctor}
      title="Add Doctor"
      backLink={"/admin/human-resources/doctors/"}
    >
      <DoctorForm />
    </AddUpdateForm>
  );
}
