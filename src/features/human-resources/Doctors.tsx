import ListPage from "@/ui/entityComponents/ListPage";
import type { Doctor } from "@/utils/models/types";
import Header from "@/features/doctor/Header";
import Row from "@/features/doctor/Row";
import { employeeFields, persondFields } from "@/utils/models/objectKeys";

export default function Doctors() {
  return (
    <ListPage<Doctor>
      backUrl="/admin/human-resources"
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
