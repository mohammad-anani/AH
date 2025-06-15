import { useOutletContext } from "react-router-dom";
import type { Patient } from "../../utils/types";
import Clickable from "@/ui/Clickable";
import PatientData from "./PatientData";
import Card from "@/ui/Card";

export default function PatientCard() {
  const { patient } = useOutletContext<{ patient: Patient }>();
  const { ID } = patient;

  return (
    <Card
      title="Patient"
      backLink="/admin/patients"
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
        to={`/admin/tests?PatientID=${ID}`}
        variant="secondary"
      >
        Show Tests Appointments
      </Clickable>
      <Clickable
        as="Link"
        to={`/admin/operations?PatientID=${ID}`}
        variant="secondary"
      >
        Show Appointments
      </Clickable>
      <Clickable
        as="Link"
        to={`/admin/finance?PatientID=${ID}`}
        variant="secondary"
      >
        Show Operations
      </Clickable>

      <Clickable
        as="Link"
        to={`/admin/finance?PatientID=${ID}`}
        variant="secondary"
      >
        Show Operations
      </Clickable>
    </Card>
  );
}
