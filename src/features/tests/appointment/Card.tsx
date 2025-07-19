import { useOutletContext } from "react-router-dom";
import type { TestAppointment } from "@/utils/models/types";
import Data from "./Data";
import EntityCard from "@/ui/entityComponents/Card";

export default function Card() {
  const { appointment } = useOutletContext<{ appointment: TestAppointment }>();
  return (
    <EntityCard
      title="Test Appointment"
      backLink="/admin/tests/appointments"
      Data={<Data testAppointment={appointment} />}
    ></EntityCard>
  );
}
