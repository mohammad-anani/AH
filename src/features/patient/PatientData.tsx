import type { Patient } from "../../utils/models/types";
import Clickable from "@/ui/customComponents/Clickable";
import PersonData from "../person/PersonData";
import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";

interface PatientDataProps {
  patient: Patient;
}

export default function PatientData({ patient }: PatientDataProps) {
  const { Person, CreatedByReceptionistID, CreatedAt } = patient;

  return (
    <>
      <PersonData person={Person} />
      <span>Created By:</span>
      <span>
        <Clickable
          as="Link"
          to={`/admin/human-resources/receptionists/${CreatedByReceptionistID}`}
          variant="link"
        >
          View Receptionist
        </Clickable>
      </span>
      <span>Created at:</span>
      <span>{formatDateIsoToLocal(CreatedAt)}</span>
    </>
  );
}
