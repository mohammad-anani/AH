import formatPhoneNumber from "@/utils/formatPhoneNumber";
import type { Department } from "../../utils/types";
import Clickable from "@/ui/Clickable";
import { Info } from "lucide-react";

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
      <Clickable
        className="flex! items-center gap-x-1"
        as="Link"
        variant="secondary"
        to={`${ID}`}
      >
        <Info className="*:text-primary! h-[20px] w-[20px]" />
        Details
      </Clickable>
    </li>
  );
}
