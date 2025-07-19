import Clickable from "@/ui/customComponents/Clickable";
import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import { formatMoney } from "@/utils/formatters/formatMoney";
import type { TestType } from "@/utils/models/types";
export default function Data({ type }: { type: TestType }) {
  return (
    <>
      <span>Name:</span>
      <span>{type.Name}</span>
      <span>Department:</span>
      <span>
        <Clickable
          as="Link"
          to={`/admin/departments/${type.DepartmentID}`}
          variant="link"
        >
          View Department
        </Clickable>
      </span>
      <span>Cost:</span>
      <span>{formatMoney(type.Cost)}</span>
      <span>Created By:</span>
      <span>
        <Clickable
          as="Link"
          to={`/admin/human-resources/admins/${type.CreatedByAdminID}`}
          variant="link"
        >
          View Admin
        </Clickable>
      </span>
      <span>Created at:</span>
      <span>{formatDateIsoToLocal(type.CreatedAt)}</span>
    </>
  );
}
