import formatPhoneNumber from "@/utils/formatters/formatPhoneNumber";
import type { Department } from "../../utils/models/types";
import DetailsButton from "@/ui/customComponents/DetailsButton";

export default function DepartmentRow({
  department,
}: {
  department: Department;
}) {
  const { ID, Name, Phone } = department;
  return (
    <li className="grid grid-cols-[1fr_1fr_1fr] text-xl!">
      <span>{Name}</span>
      <span>{formatPhoneNumber(Phone, "xx xxx xxx")}</span>
      <DetailsButton ID={ID} />
    </li>
  );
}
