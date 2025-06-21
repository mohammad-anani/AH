import ListPage from "@/ui/ListPage";
import type { Receptionist } from "@/utils/models/types";
import ReceptionitsHeader from "@/features/receptionist/ReceptionistsHeader";
import ReceptionistRow from "@/features/receptionist/ReceptionistRow";
import { employeeFields, persondFields } from "@/utils/models/objectKeys";

export default function Receptionists() {
  return (
    <ListPage<Receptionist>
      backUrl="/admin/human-resources"
      title="Receptionists"
      canAdd
      emptyText="No Receptionists"
      Header={<ReceptionitsHeader />}
      render={(receptionist) => (
        <ReceptionistRow key={receptionist.ID} receptionist={receptionist} />
      )}
      filterFields={[
        ...persondFields,
        ...employeeFields,
        ["CreatedAt", "datetime"],
        ["AdminID", "number"],
      ]}
    />
  );
}
