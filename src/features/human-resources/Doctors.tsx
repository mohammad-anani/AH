import ListPage from "@/ui/entityComponents/ListPage";
import type { Doctor } from "@/utils/models/types";
import DoctorsHeader from "@/features/doctor/DoctorsHeader";
import DoctorRow from "@/features/doctor/DoctorRow";
import { employeeFields, persondFields } from "@/utils/models/objectKeys";

export default function Doctors() {
  return (
    <ListPage<Doctor>
      backUrl="/admin/human-resources"
      title="Doctors"
      canAdd={false}
      emptyText="No Doctors"
      Header={<DoctorsHeader />}
      render={(doctor) => <DoctorRow key={doctor.ID} doctor={doctor} />}
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
