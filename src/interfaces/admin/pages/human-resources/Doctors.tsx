import ListPage from "@/ui/entityComponents/ListPage";
import type { DoctorRow } from "@/utils/models/types";
import Header from "@/features/human-resources/doctor/Header";
import Row from "@/features/human-resources/doctor/Row";
import { employeeFields, persondFields } from "@/utils/models/objectKeys";

export default function Doctors() {
  return (
    <ListPage<DoctorRow>
      title="Doctors"
      canAdd={false}
      emptyText="No Doctors"
      Header={<Header />}
      render={(doctor) => <Row key={doctor.ID} doctor={doctor} />}
      filterFields={[
        ...persondFields,
        ...employeeFields,
        ["Specialization", "string"],
        ["CreatedAt", "datetime"],
        ["ReceptionistID", "number"],
      ]}
    />
  );
}
