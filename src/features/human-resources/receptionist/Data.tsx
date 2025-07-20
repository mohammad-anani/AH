import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import type { Receptionist } from "../../../utils/models/types/types";
import EmployeeData from "../employee/Data";
import Clickable from "@/ui/customComponents/Clickable";

interface DataProps {
  receptionist: Receptionist;
}

export default function Data({ receptionist }: DataProps) {
  const { Employee, CreatedByAdminID, CreatedAt } = receptionist;

  return (
    <>
      <EmployeeData employee={Employee} />
      <span>Created By:</span>
      <span>
        <Clickable
          as="Link"
          to={`/admin/human-resources/admins/${CreatedByAdminID}`}
          variant="link"
        >
          View Admin
        </Clickable>
      </span>
      <span>Created at:</span>
      <span>{formatDateIsoToLocal(CreatedAt)}</span>
    </>
  );
}
