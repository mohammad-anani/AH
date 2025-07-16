import ListPage from "@/ui/entityComponents/ListPage";
import type { PatientRow } from "@/utils/models/types";
import Header from "@/features/human-resources/patient/Header";
import Row from "@/features/human-resources/patient/Row";
import { persondFields } from "@/utils/models/objectKeys";

export default function Patients() {
  return (
    <ListPage<PatientRow>
      backUrl="/admin/human-resources"
      title="Patients"
      canAdd={false}
      emptyText="No Patients"
      Header={<Header />}
      render={(patient) => <Row key={patient.ID} patient={patient} />}
      filterFields={[
        ...persondFields,
        ["CreatedAt", "datetime"],
        ["ReceptionistID", "number"],
      ]}
    />
  );
}
