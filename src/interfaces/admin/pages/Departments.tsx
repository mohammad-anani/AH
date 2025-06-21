import ListPage from "@/ui/ListPage";
import type { Department } from "@/utils/models/types";
import DepartmentsHeader from "@/features/department/DepartmentsHeader";
import DepartmentRow from "@/features/department/DepartmentRow";

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
