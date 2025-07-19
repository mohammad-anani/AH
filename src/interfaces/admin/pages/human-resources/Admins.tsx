import ListPage from "@/ui/entityComponents/ListPage";
import type { AdminRow } from "@/utils/models/types";
import Header from "@/features/human-resources/admin/Header";
import Row from "@/features/human-resources/admin/Row";
import { employeeFields, persondFields } from "@/utils/models/objectKeys";

export default function Admins() {
  return (
    <ListPage<AdminRow>
      title="Admins"
      canAdd
      emptyText="No Admins"
      Header={<Header />}
      render={(admin) => <Row key={admin.ID} admin={admin} />}
      filterFields={[
        ...persondFields,
        ...employeeFields,
        ["CreatedAt", "datetime"],
      ]}
    />
  );
}
