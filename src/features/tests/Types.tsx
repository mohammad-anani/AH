import ListPage from "@/ui/entityComponents/ListPage";
import type { TestType } from "@/utils/models/types";
import Header from "../testType/Header";
import Row from "../testType/Row";

export default function Types() {
  return (
    <ListPage<TestType>
      backUrl="/admin/tests"
      title="Test Types"
      canAdd={true}
      emptyText="No Test Orders"
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
