import { useOutletContext } from "react-router-dom";
import type { Receptionist } from "../../../utils/models/types";
import Clickable from "@/ui/customComponents/Clickable";
import Data from "./Data";
import EntityCard from "@/ui/entityComponents/Card";

export default function Card() {
  const { receptionist } = useOutletContext<{ receptionist: Receptionist }>();
  const { ID } = receptionist;

  return (
    <EntityCard
      title="Receptionist"
      backLink="/admin/human-resources/receptionists"
      Data={<Data receptionist={receptionist} />}
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
    </EntityCard>
  );
}
