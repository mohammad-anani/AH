import Header from "@/features/tests/type/Header";
import Row from "@/features/tests/type/Row";
import ListPage from "@/ui/entityComponents/ListPage";
import type { TestType } from "@/utils/models/types";

export default function Types() {
  return (
    <ListPage<TestType>
      backUrl="/admin/tests"
      title="Test Types"
      canAdd={true}
      emptyText="No Test Orders"
      Header={<Header />}
      render={(type) => <Row key={type.ID} />}
      filterFields={[
        ["ID", "number"],
        ["DepartmentID", "number"],
        ["Name", "string"],
        ["Cost", "number"],
        ["AdminID", "number"],
        ["CreatedAt", "datetime"],
      ]}
    />
  );
}
