import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";

import EmployeeData from "../employee/Data";
import Clickable from "@/ui/customComponents/Clickable";
import type { Admin } from "@/utils/models/types/types";

interface DataProps {
  admin: Admin;
}

export default function Data({ admin }: DataProps) {
  const { Employee, CreatedByAdminID, CreatedAt } = admin;
  return (
    <>
      <EmployeeData employee={Employee} />
      <span>Created By:</span>
      <span>
        {CreatedByAdminID ? (
          <Clickable
            as="Link"
            to={`/admin/human-resources/admins/${CreatedByAdminID}`}
            variant="secondary"
          >
            View Admin
          </Clickable>
        ) : (
          "System"
        )}
      </span>
      <span>Created at:</span>
      <span>{formatDateIsoToLocal(CreatedAt)}</span>
    </>
  );
}
