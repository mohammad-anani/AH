import ListPage from "@/ui/entityComponents/ListPage";
import Header from "../testAppointment/Header";
import Row from "../testAppointment/Row";
import type { TestAppointment } from "@/utils/models/types";

export default function Appointments() {
  return (
    <ListPage<TestAppointment>
      backUrl="/admin/tests"
      title="Test Appointments"
      canAdd={false}
      emptyText="No Test Appointments"
      Header={<Header />}
      render={(appointment) => (
        <Row key={appointment.ID} appointment={appointment} />
      )}
      filterFields={[
        ["ID", "number"],
        ["TestOrderID", "number"],
        ["PatientID", "number"],
        ["ScheduledDate", "datetime"],
        ["Status", "select", ["Cancelled", "Accepted"]],
        ["Result", "string"],
        ["ResultDate", "datetime"],
        ["ReceptionistID", "number"],
        ["CreatedAt", "datetime"],
      ]}
    />
  );
}
