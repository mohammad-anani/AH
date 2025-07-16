import type { Doctor } from "../../../utils/models/types";
import Clickable from "@/ui/customComponents/Clickable";
import EmployeeData from "../employee/Data";
import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";

interface DataProps {
  doctor: Doctor;
}

export default function Data({ doctor }: DataProps) {
  const { Employee, Specialization, CreatedByReceptionistID, CreatedAt } =
    doctor;

  return (
    <>
      <EmployeeData employee={Employee} />
      <span>Specialization:</span>
      <span>{Specialization}</span>
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
