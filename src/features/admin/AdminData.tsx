import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import type { Admin } from "../../utils/models/types";
import EmployeeData from "../employee/EmployeeData";
import Clickable from "@/ui/customComponents/Clickable";

interface AdminDataProps {
  admin: Admin;
}

export default function AdminData({ admin }: AdminDataProps) {
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
