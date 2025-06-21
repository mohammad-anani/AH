import { useOutletContext } from "react-router-dom";
import type { Doctor } from "../../utils/models/types";
import Clickable from "@/ui/Clickable";
import DoctorData from "./DoctorData";
import Card from "@/ui/Card";

export default function DoctorCard() {
  const { doctor } = useOutletContext<{ doctor: Doctor }>();
  const { ID } = doctor;

  return (
    <Card
      title="Doctor"
      backLink="/admin/human-resources/doctors"
      Data={<DoctorData doctor={doctor} />}
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
    </Card>
  );
}
