import Header from "@/features/tests/type/Header";
import Row from "@/features/tests/type/Row";
import ListPage from "@/ui/entityComponents/ListPage";
import type { TestTypeRow } from "@/utils/models/types";

export default function Types() {
  return (
    <ListPage<TestTypeRow>
      backUrl="/admin/tests"
      title="Test Types"
      canAdd={true}
      emptyText="No Test Types"
      Header={<Header />}
      render={(type) => <Row key={type.ID} type={type} />}
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
