import ListPage from "@/ui/entityComponents/ListPage";
import type { Receptionist } from "@/utils/models/types";
import Header from "@/features/human-resources/receptionist/Header";
import Row from "@/features/human-resources/receptionist/Row";
import { employeeFields, persondFields } from "@/utils/models/objectKeys";

export default function Receptionists() {
  return (
    <ListPage<Receptionist>
      backUrl="/admin/human-resources"
      title="Receptionists"
      canAdd
      emptyText="No Receptionists"
      Header={<Header />}
      render={(receptionist) => (
        <Row key={receptionist.ID} receptionist={receptionist} />
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
