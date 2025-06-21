import ListPage from "@/ui/ListPage";
import type { Admin } from "@/utils/models/types";
import AdminsHeader from "@/features/admin/AdminsHeader";
import AdminRow from "@/features/admin/AdminRow";
import { employeeFields, persondFields } from "@/utils/models/objectKeys";

export default function Admins() {
  return (
    <ListPage<Admin>
      backUrl="/admin/human-resources"
      title="Admins"
      canAdd
      emptyText="No Admins"
      Header={<AdminsHeader />}
      render={(admin) => <AdminRow key={admin.ID} admin={admin} />}
      filterFields={[
        ...persondFields,
        ...employeeFields,
        ["CreatedAt", "datetime"],
      ]}
    />
  );
}
