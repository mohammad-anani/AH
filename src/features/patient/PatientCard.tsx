import { useOutletContext } from "react-router-dom";
import type { Patient } from "../../utils/models/types";
import Clickable from "@/ui/Clickable";
import PatientData from "./PatientData";
import Card from "@/ui/Card";

export default function PatientCard() {
  const { patient } = useOutletContext<{ patient: Patient }>();
  const { ID } = patient;

  return (
    <Card
      title="Patient"
      backLink="/admin/human-resources/patients"
      Data={<PatientData patient={patient} />}
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
    </Card>
  );
}
