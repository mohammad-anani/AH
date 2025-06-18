import type { Doctor } from "../../utils/types";
import Clickable from "@/ui/Clickable";
import EmployeeData from "../employee/EmployeeData";
import formatDateIsoToLocal from "@/utils/formatDateIsoToLocal";

interface DoctorDataProps {
  doctor: Doctor;
}

export default function DoctorData({ doctor }: DoctorDataProps) {
  const { Employee, Specialization, CreatedByReceptionistID, CreatedAt } =
    doctor;

  return (
    <>
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
    </>
  );
}
