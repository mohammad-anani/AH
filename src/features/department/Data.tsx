import Clickable from "@/ui/customComponents/Clickable";
import type { Department } from "../../utils/models/types";
import formatPhoneNumber from "@/utils/formatters/formatPhoneNumber";
import formatDateIsoToLocal from "@/utils/formatters/formatDateIsoToLocal";

interface DataProps {
  department: Department;
}

export default function Data({ department }: DataProps) {
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
      <span>{formatDateIsoToLocal(CreatedAt)}</span>
    </>
  );
}
