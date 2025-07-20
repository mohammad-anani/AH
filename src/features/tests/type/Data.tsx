import Clickable from "@/ui/customComponents/Clickable";
import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";
import { formatMoney } from "@/utils/formatters/formatMoney";
import type { TestType } from "@/utils/models/types/types";
export default function Data({ testType }: { testType: TestType }) {
  return (
    <>
      <span>Name:</span>
      <span>{testType.Name}</span>
      <span>Department:</span>
      <span>
        <Clickable
          as="Link"
          to={`/admin/departments/${testType.DepartmentID}`}
          variant="link"
        >
          View Department
        </Clickable>
      </span>
      <span>Cost:</span>
      <span>{formatMoney(testType.Cost)}</span>
      <span>Created By:</span>
      <span>
        <Clickable
          as="Link"
          to={`/admin/human-resources/admins/${testType.CreatedByAdminID}`}
          variant="link"
        >
          View Admin
        </Clickable>
      </span>
      <span>Created at:</span>
      <span>{formatDateIsoToLocal(testType.CreatedAt)}</span>
    </>
  );
}
