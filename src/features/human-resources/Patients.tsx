import ListPage from "@/ui/entityComponents/ListPage";
import type { Patient } from "@/utils/models/types";
import PatientsHeader from "@/features/patient/PatientsHeader";
import PatientRow from "@/features/patient/PatientRow";
import { persondFields } from "@/utils/models/objectKeys";

export default function Patients() {
  return (
    <ListPage<Patient>
      backUrl="/admin/human-resources"
      title="Patients"
      canAdd={false}
      emptyText="No Patients"
      Header={<PatientsHeader />}
      render={(patient) => <PatientRow key={patient.ID} patient={patient} />}
      filterFields={[
        ...persondFields,
        ["CreatedAt", "datetime"],
        ["ReceptionistID", "number"],
      ]}
    />
  );
}
