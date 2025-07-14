import { useOutletContext } from "react-router-dom";
import type { Doctor } from "../../utils/models/types";
import Clickable from "@/ui/customComponents/Clickable";
import Data from "./Data";
import EntityCard from "@/ui/entityComponents/Card";

export default function Card() {
  const { doctor } = useOutletContext<{ doctor: Doctor }>();
  const { ID } = doctor;

  return (
    <EntityCard
      title="Doctor"
      backLink="/admin/human-resources/doctors"
      Data={<Data doctor={doctor} />}
    >
      <Clickable
        as="Link"
        to={`/admin/appointments?DoctorID=${ID}`}
        variant="secondary"
      >
        Show Appointments
      </Clickable>
      <Clickable
        as="Link"
        to={`/admin/operations?DoctorID=${ID}`}
        variant="secondary"
      >
        Show Operations
      </Clickable>
    </EntityCard>
  );
}
