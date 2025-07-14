import ListPage from "@/ui/entityComponents/ListPage";
import type { Department } from "@/utils/models/types";
import DepartmentsHeader from "@/features/department/Header";
import DepartmentRow from "@/features/department/Row";

export default function Departments() {
  return (
    <ListPage<Department>
      title="Departments"
      canAdd
      emptyText="No Departments"
      Header={<DepartmentsHeader />}
      render={(department) => (
        <DepartmentRow key={department.ID} department={department} />
      )}
      filterFields={[
        ["Name", "string"],
        ["Phone", "phone"],
        ["AdminID", "string"],
        ["CreatedAt", "datetime"],
      ]}
    />
  );
}
