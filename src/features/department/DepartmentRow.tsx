import formatPhoneNumber from "@/utils/formatPhoneNumber";
import type { Department } from "../../utils/types";
import DetailsButton from "@/ui/DetailsButton";

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
