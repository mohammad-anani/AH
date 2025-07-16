import ListPage from "@/ui/entityComponents/ListPage";
import type { TestOrder } from "@/utils/models/types";
import Header from "../../../../features/tests/order/Header";
import Row from "../../../../features/tests/order/Row";

export default function Orders() {
  return (
    <ListPage<TestOrder>
      backUrl="/admin/tests"
      title="Test Orders"
      canAdd={false}
      emptyText="No Test Orders"
      Header={<Header />}
      render={(order) => <Row key={order.ID} />}
      filterFields={[
        ["ID", "number"],
        ["AppointmentID", "number"],
        ["TestTypeID", "number"],
        ["DoctorID", "number"],
        ["OrderAt", "datetime"],
      ]}
    />
  );
}
