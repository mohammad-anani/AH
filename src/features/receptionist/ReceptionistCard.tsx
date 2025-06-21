import { useOutletContext } from "react-router-dom";
import type { Receptionist } from "../../utils/models/types";
import Clickable from "@/ui/Clickable";
import ReceptionistData from "./ReceptionistData";
import Card from "@/ui/Card";

export default function ReceptionistCard() {
  const { receptionist } = useOutletContext<{ receptionist: Receptionist }>();
  const { ID } = receptionist;

  return (
    <Card
      title="Receptionist"
      backLink="/admin/human-resources/receptionists"
      Data={<ReceptionistData receptionist={receptionist} />}
    >
      <Clickable
        as="Link"
        to={`/admin/appointments?ReceptionistID=${ID}`}
        variant="secondary"
      >
        Show Appointments
      </Clickable>
      <Clickable
        as="Link"
        to={`/admin/tests?ReceptionistID=${ID}`}
        variant="secondary"
      >
        Show Tests Appointments
      </Clickable>
      <Clickable
        as="Link"
        to={`/admin/tests?ReceptionistID=${ID}`}
        variant="secondary"
      >
        Show Tests
      </Clickable>
      <Clickable
        as="Link"
        to={`/admin/tests?ReceptionistID=${ID}`}
        variant="secondary"
      >
        Show Patients
      </Clickable>
      <Clickable
        as="Link"
        to={`/admin/tests?ReceptionistID=${ID}`}
        variant="secondary"
      >
        Show Doctors
      </Clickable>
      <Clickable
        as="Link"
        to={`/admin/tests?ReceptionistID=${ID}`}
        variant="secondary"
      >
        Show Operartions
      </Clickable>
      <Clickable
        as="Link"
        to={`/admin/tests?ReceptionistID=${ID}`}
        variant="secondary"
      >
        Show Payments
      </Clickable>
      <Clickable
        as="Link"
        to={`/admin/tests?ReceptionistID=${ID}`}
        variant="secondary"
      >
        Show Insurances
      </Clickable>
    </Card>
  );
}
