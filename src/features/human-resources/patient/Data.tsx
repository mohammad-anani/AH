import type { Patient } from "../../../utils/models/types/types";
import Clickable from "@/ui/customComponents/Clickable";
import PersonData from "../person/Data";
import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";

interface DataProps {
  patient: Patient;
}

export default function Data({ patient }: DataProps) {
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
