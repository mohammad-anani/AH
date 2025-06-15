import Clickable from "@/ui/Clickable";
import type { Department } from "../../utils/types";
import formatPhoneNumber from "@/utils/formatPhoneNumber";

export default function DepartmentData({
  department,
}: {
  department: Department;
}) {
  const { Name, Phone, CreatedAt, CreatedByAdminID } = department;

  return (
    <>
      <span>Name:</span>
      <span>{Name}</span>
      <span>Phone:</span>
      <span>{formatPhoneNumber(Phone)}</span>
      <span>Created by:</span>
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
      <span>{new Date(CreatedAt).toLocaleDateString()}</span>
    </>
  );
}
