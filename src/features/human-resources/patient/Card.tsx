import { useOutletContext } from "react-router-dom";
import type { Patient } from "../../../utils/models/types";
import Clickable from "@/ui/customComponents/Clickable";
import Data from "./Data";
import EntityCard from "@/ui/entityComponents/Card";

export default function Card() {
  const { patient } = useOutletContext<{ patient: Patient }>();
  const { ID } = patient;

  return (
    <EntityCard
      title="Patient"
      backLink="/admin/human-resources/patients"
      Data={<Data patient={patient} />}
    >
      <Clickable
        as="Link"
        to={`/admin/appointments?PatientID=${ID}`}
        variant="secondary"
      >
        Show Appointments
      </Clickable>
      <Clickable
        as="Link"
        to={`/admin/testAppointments?PatientID=${ID}`}
        variant="secondary"
      >
        Show Tests Appointments
      </Clickable>
      <Clickable
        as="Link"
        to={`/admin/operations?PatientID=${ID}`}
        variant="secondary"
      >
        Show Operations
      </Clickable>
      <Clickable
        as="Link"
        to={`/admin/insurances?PatientID=${ID}`}
        variant="secondary"
      >
        Show Insurances
      </Clickable>
    </EntityCard>
  );
}
